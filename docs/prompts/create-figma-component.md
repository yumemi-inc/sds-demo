# Figma Component Creation Workflow

新しいFigmaコンポーネントから対応するReactコンポーネント、Stories、Code Connectを自動作成するワークフロー。

## 実行手順

### Step 0: Git準備
1. mainブランチにチェックアウト: `git checkout main`
2. 最新状態に更新: `git pull origin main`
3. FigmaURLからコンポーネント名を取得してブランチ作成
   - URLの`node-id`パラメータからコンポーネント名を推測
   - 例: `node-id=7753-4634` → `feat/accordion-component`
   - ブランチ命名規則: `feat/[component-name]-component`
4. 新ブランチに移動: `git checkout -b feat/[component-name]-component`

### Step 1: Figma URL取得

**ユーザーに確認:**
```
新しいFigmaコンポーネントのURLを教えてください。
例: https://figma.com/design/filekey/filename?node-id=123:456
```

**実行内容:**
- Figmaからコンポーネント情報とデザイントークンを取得
- 取得した情報を参考にコーディング


### Step 2: 分析・設計
- コンポーネントカテゴリ判定（primitives/compositions）
- 必要props特定（variant、size、state等）
- 既存コンポーネント重複チェック
- React Aria適用方法決定
- **🚨 重要: アイコン使用時の確認**
  - `src/ui/icons/index.ts` でアイコン命名規則確認（`Icon[Name]`形式）
  - 既存コンポーネントのアイコン使用パターン参照
  - Figmaツールの結果と実際のコードベースの差異をチェック

### Step 3: Reactコンポーネント作成
**作成:** `src/ui/primitives/[ComponentName]/[ComponentName].tsx`

基本構造：
```tsx
import { clsx } from "clsx";
import React from "react";
import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";
import "./componentName.css";

export type ComponentNameProps = {
  variant?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium" | "large";
  className?: string;
} & RACButtonProps;

export const ComponentName = React.forwardRef<HTMLButtonElement, ComponentNameProps>(
  ({ className, variant = "primary", size = "medium", ...props }, ref) => {
    const classNames = clsx(
      className,
      "component-name",
      `component-name-variant-${variant}`,
      `component-name-size-${size}`
    );
    
    return <RACButton className={classNames} ref={ref} {...props} />;
  }
);
```

**重要**: 既存コンポーネントを必ず確認し、utilsパターンや型定義を参考にする

**⚠️ アイコン使用時の注意点:**
- アイコンインポート前に必ず `src/ui/icons/index.ts` で正確な名前を確認
- 既存コンポーネント（`Button.tsx`等）でアイコン使用パターンを参照

### Step 4: CSS実装
**作成:** `src/ui/primitives/[ComponentName]/[componentName].css`

**重要: CSS実装ルール**

1. **必須要件**
   - CSS変数を必ず使用（色、サイズ、スペーシング）
   - 直接色指定は禁止（`#ffffff`, `#1e1e1e`など）
   - Figmaデザインと完全一致させる
   - React Aria Componentsを優先使用

2. **実装手順**
   - Figmaからレイアウトやスタイルの情報を取得し実装する
   - 既存コンポーネントパターンを参考にする



### Step 5: Storybook Stories作成
**作成:** `src/stories/primitives/[ComponentName].stories.tsx`

基本構造：
```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentName } from "primitives";

const meta: Meta<typeof ComponentName> = {
  component: ComponentName,
  title: "SDS Primitives/[Category]",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryComponentName: StoryObj<typeof ComponentName> = {
  name: "ComponentName",
  args: {
    children: "Button Text",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
    size: {
      control: { type: "select" },
    },
  },
  render: ({ children, ...props }) => (
    <ComponentName {...props}>{children}</ComponentName>
  ),
};
```

**重要**: 既存storiesを参考にアイコン使用パターンや命名規則を確認

### Step 6: Code Connect作成
**作成:** `src/figma/primitives/[ComponentName].figma.tsx`


基本構造：
```tsx
import figma from "@figma/code-connect";
import { ComponentName } from "primitives";

figma.connect(ComponentName, "<FIGMA_URL_PLACEHOLDER>", {
  props: {
    variant: figma.enum("Variant", {
      Primary: "primary",
      Neutral: "neutral",
      Subtle: "subtle",
    }),
    size: figma.enum("Size", {
      Small: "small",
      Medium: "medium",
    }),
    children: figma.string("Label"),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ children, ...props }) => (
    <ComponentName onPress={() => {}} {...props}>
      {children}
    </ComponentName>
  ),
});
```

**重要なポイント:**
- **props mapping**: Figmaプロパティ名 → コードプロパティ値の正確なマッピング
- **example関数**: 実際の使用例を示す（onPress等の必須プロパティも含める）
- **URL placeholder**: 後で `figma.config.json` の `documentUrlSubstitutions` で置換
- **既存figmaファイル参照**: 同様のコンポーネントパターンを確認

### Step 7: エクスポート更新
- `src/ui/primitives/index.ts` - export追加（アルファベット順）
- `figma.config.json` - documentUrlSubstitutions追加（アルファベット順）

**figma.config.json更新例:**
```json
"<FIGMA_[CATEGORY]_[COMPONENT_NAME]>": "https://figma.com/design/dH8IBJZoek9IfHqTGcUINv?node-id=4185-3778"
```
※ ユーザー提供URLの `node-id=4185:3778` を `4185-3778` に変換

### Step 8: 検証実行
- `npm run app:lint` 
- TypeScript型チェック
- Storybook動作確認

### Step 9: 完了報告
作成ファイル一覧と動作確認結果を報告

### Step 10: Git コミット・PR作成
1. **ステージングと確認**
   - `git add .` で変更をステージング
   - `git status` で変更内容確認
   
2. **コミット作成**
   - 適切な粒度でコミット（通常は1つのコンポーネント = 1コミット）
   - コミットメッセージ例: `feat: add Accordion component with React Aria and Figma Code Connect`
   - メッセージ形式: `feat: add [ComponentName] component with React Aria and Figma Code Connect`

3. **プッシュとPR作成**
   - `git push origin feat/[component-name]-component`
   - `gh pr create` でPR作成
   - PRタイトル: `feat: add [ComponentName] component`
   - PR説明に含める内容:
     - Figma URL
     - 実装した機能（React component, CSS, Stories, Code Connect）
     - テスト確認項目
     - スクリーンショット（可能であれば）



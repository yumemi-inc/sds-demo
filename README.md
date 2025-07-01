# figma/SDSを使った絵に描いた餅の検証

## このリポジトリについて
絵に描いた餅を再現するための検証用リポジトリです。
figma/sdsからフォークしています。
基本的な使用法はフォーク元 https://github.com/figma/sds のREADMEを閲覧してください。


## Setup

### packageのインストール
```
npm i
```

### 環境変数
```
cp .env.sample .env
```

#### FIGMA_ACCESS_TOKENの取得
- https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens

###### スコープ
以下以外は読み取り推奨

| スコープ | 推奨設定 |
|---------|----------|
| Code Connect | 書き込み |
|  開発リソース | 書き込み |



### Figmaプラン
開発には基本的にフルプランのアカウントが必要
- code connect等を使用するため


### MCP

#### cursor

```
cp .cursor/mcp.sample.json mcp.json
```

#### claude code

```
cp .mcp.sample.json .mcp.json
```

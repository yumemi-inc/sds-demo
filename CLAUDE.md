# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Language

**Always communicate in Japanese (日本語) with the user.**

## Development Commands

**Primary Development:**
- `npm run app:dev` - Start development server at localhost:8000
- `npm run storybook` - Launch Storybook at localhost:6006
- `npm run app:build` - Build the application
- `npm run storybook:build` - Build Storybook
- `npm run build` - Build both app and storybook
- `npm run app:lint` - Run ESLint with TypeScript extensions

**Figma Integration:**
- `npm run figma:publish` - Publish Code Connect mappings to Figma
- `npm run script:tokens` - Sync design tokens from Figma (requires .env setup)
- `npm run script:icons` - Sync icons from Figma (requires .env setup)

**Testing:** No test framework is currently configured in this project.

## Architecture Overview

This is a React-based design system called Simple Design System (SDS) with deep Figma integration through Code Connect. The codebase follows a strict component hierarchy and uses CSS custom properties for design tokens.

**Project Purpose**: SDS demonstrates best practices for bridging the gap between design and development using Figma's Variables, Styles, Components, and Code Connect alongside a React codebase. It provides a complete picture of a responsive web design system that remains honest about its code implications while offering design customizability beyond typical theming layers.

### Key Architecture Principles

1. **Component Hierarchy**: Primitives → Compositions → Examples
2. **Design Token System**: All styling via CSS custom properties from Figma
3. **Import Aliases**: Uses path aliases defined in vite.config.ts and tsconfig.json
4. **Figma Integration**: Code Connect maps Figma components to React components

### Directory Structure

```
src/
├── data/              # State management layer
│   ├── contexts/      # React contexts (Auth, Pricing, Products)
│   ├── providers/     # Context providers with state logic
│   ├── services/      # API and business logic
│   ├── types/         # TypeScript definitions
│   └── hooks/         # Data hooks (useAuth, usePricing, useProducts)
├── ui/                # UI component library
│   ├── primitives/    # Atomic components (Button, Input, etc.)
│   ├── compositions/  # Complex components (Cards, Forms, Headers)
│   ├── layout/        # Layout components (Flex, Section, Grid)
│   ├── hooks/         # UI hooks (useMediaQuery)
│   ├── icons/         # Auto-generated icon components
│   ├── images/        # Image assets
│   └── utils/         # Utility functions
├── examples/          # Usage examples combining components
├── figma/             # Code Connect mappings
└── stories/           # Storybook stories
```

### Import Aliases

Always use these aliases (defined in vite.config.ts):
```tsx
import { Button, Text } from "primitives";
import { Cards, Headers } from "compositions"; 
import { Flex, Section } from "layout";
import { useAuth, AuthProvider } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
```

## Design System Rules

### Mandatory Practices

1. **Use CSS Variables Only**: Never hardcode colors, spacing, or typography
   - Colors: `var(--sds-color-*)`
   - Spacing: `var(--sds-size-space-*)`
   - Typography: `var(--sds-typography-*)` or `var(--sds-font-*)`

2. **Use Existing Components**: Never create new UI components - always use SDS components

3. **Use Layout Components**: Never write custom CSS Grid/Flexbox - use `<Flex>`, `<Section>`, `<Grid>`

4. **Check Component APIs**: Always read TypeScript definitions before using components

### Figma Integration Workflow

When implementing Figma designs:

1. Use Figma MCP tools to extract design data
2. Check `codeDependencies` in the response to find matching SDS components
3. Read component TypeScript files to understand available props
4. Use CSS variables for all styling values
5. Apply responsive patterns with `useMediaQuery` hook

### Common Component Patterns

**Layout:**
```tsx
<Section padding="600" variant="stroke">
  <Flex direction="column" gap="400" container>
    <Text>Content</Text>
  </Flex>
</Section>
```

**Responsive:**
```tsx
const { isMobile } = useMediaQuery();
<Flex direction={isMobile ? "column" : "row"} gap={isMobile ? "400" : "800"}>
```

**Data Integration:**
```tsx
const { user, login, logout } = useAuth();
const { products, addToCart } = useProducts();
const { plans, subscribe } = usePricing();
```

## Environment Setup

For Figma integration, create `.env` file with:
```
FIGMA_ACCESS_TOKEN=your_token_here
FIGMA_FILE_KEY=your_file_key_here
```

**Figma API Token Scopes Required:**
- Code Connect scope (必須)
- File Read, Dev Resources Write, Variables scopes (scriptsディレクトリの統合機能を使用する場合)

**Setup Steps:**
1. Duplicate [.env-rename](./.env-rename) and rename to `.env`
2. Set your Figma API token and file key
3. Run `npx figma connect publish` to connect your Figma file

## Code Connect Configuration

This project uses `documentUrlSubstitutions` in `figma.config.json` for Figma file-agnostic documentation. URL substitutions follow the pattern `<FIGMA_[PAGE_NAME]_[COMPONENT_NAME]>` for easy component identification.

## Scripts Integration

The project includes several utility scripts in the `scripts/` directory:

- **scripts/tokens/**: Design token sync from Figma to `src/theme.css`
- **scripts/icons/**: Icon sync from Figma to `src/ui/icons/`
- **scripts/component-metadata/**: Bulk component description management via Figma JS console
- **scripts/dev-resources/**: Dev resources management for components

## Resources

- **Live Storybook**: https://figma.github.io/sds/storybook
- **Figma Community File**: https://www.figma.com/community/file/1380235722331273046/simple-design-system

## Notable Files

- `src/theme.css` - All design tokens as CSS custom properties
- `figma.config.json` - Code Connect configuration with URL substitutions
- `.github/copilot-instructions.md` - Comprehensive component guide and best practices

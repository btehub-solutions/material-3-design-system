# Google Material Design 3 (M3) Design System Repository

A complete, specification-compliant Google Material Design 3 (M3) design system, token architecture, component library, and template suite ready for AI agents, production web applications, and UI engineering workflows.

> [!TIP]
> **🤖 NOTICE FOR AI AGENTS & CODING ASSISTANTS**
> This repository is the canonical **single source of truth** for all UI design, tokens, and frontend code.
> Any AI agent (Google Antigravity IDE & Agent, GitHub Copilot, Claude Code, Cursor, Windsurf, Cline) reading this repo **MUST** strictly adhere to the guidelines set in [`GEMINI.md`](./GEMINI.md), [`AGENTS.md`](./AGENTS.md), [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md), [`.cursorrules`](./.cursorrules), [`CLAUDE.md`](./CLAUDE.md), and [`.github/copilot-instructions.md`](./.github/copilot-instructions.md).
>
> ❌ **NEVER** use Tailwind CSS, Bootstrap, inline styles (`style="..."`), or hardcoded hex colors outside `styles/theme.css`.
> 
> ✅ **ALWAYS** use M3 design tokens (`var(--md-sys-*)`), `@material/web@2.5.0` components, and pre-built components in `components/`.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```
Pins `@material/web@2.5.0` exactly without version drift.

### 2. Development & Showcase Server
```bash
npm run dev
```
Launches the interactive M3 Kitchen Sink showcase in your browser.

### 3. Production Build & Test
```bash
npm test
npm run build
```
Compiles all pages (`index.html`, `pages/login.html`, `pages/settings.html`, `pages/starter-template.html`, `pages/404.html`) into `dist/`.

---

## 📁 Repository Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── styles/
│   ├── theme.css             # M3 tokens (Color roles, Light/Dark/High-Contrast, Shapes, Motion, Elevation, Spacing)
│   ├── base.css              # M3 reset, typography scale utility classes, window size classes, skip link
│   ├── showcase.css          # Showcase page styles (swatches, layout grids)
│   ├── auth.css              # Authentication & onboarding layout styles
│   ├── settings-page.css     # Settings & profile preferences styles
│   └── error-page.css        # 404 & offline state page styles
├── components/
│   ├── bte-card.css          # Spec-compliant Elevated, Filled, and Outlined cards
│   ├── bte-navigation.css    # Navigation Bar (Compact), Navigation Rail (Medium), Drawer (Expanded)
│   ├── bte-top-app-bar.css   # Top App Bar with scroll elevation
│   ├── bte-badge.css         # Small dot and large numeric notification badges
│   ├── bte-search.css        # Search bar with leading icon and trailing actions
│   ├── bte-segmented-button.css # Single and multi-select segmented button sets
│   ├── bte-snackbar.css      # Snackbar toast notifications
│   ├── bte-snackbar.js       # Dynamic snackbar JavaScript controller
│   ├── bte-page-states.css   # Empty, error, and loading state layouts
│   └── bte-theme.js          # Theme persistence & switching helper
├── pages/
│   ├── starter-template.html # Clean canonical boilerplate for new pages
│   ├── login.html            # Authentication & sign-in template
│   ├── settings.html         # Application preferences & theme switcher template
│   ├── onboarding.html       # Product welcome & onboarding tour template
│   ├── profile.html          # User profile & account security template
│   ├── offline.html          # Offline fallback template
│   └── 404.html              # Illustrated error page
├── docs/
│   ├── component-catalog.md  # Comprehensive component catalog & API reference
│   └── token-reference.md    # Design token system documentation
├── assets/
│   ├── shapes/               # Extracted official M3 SVG shapes (cookies, bursts, pills, gems, etc.)
│   ├── figma-kit/            # Official Figma M3 Design Kit archives and slices
│   └── favicon.svg           # Standard M3 brand icon
├── manifest.json             # PWA Web App Manifest
├── vite.config.js            # Multi-page build configuration
├── index.html                # Live interactive M3 Kitchen Sink demonstration
├── package.json              # Pinned dependencies & scripts
├── LICENSE                   # Apache-2.0 License
├── DESIGN-SYSTEM.md          # Single source of truth for M3 rules, tokens, and components
├── AGENTS.md                 # Rules & context for AI coding agents
└── ILLUSTRATION-GUIDE.md     # Illustration & brand art standards
```

---

## 🎨 Token Architecture (`/styles/theme.css`)

All color, typography, shape, and motion decisions flow through CSS custom properties. **No raw color or hex values are ever hardcoded in component files.**

- **Theme Modes Supported**:
  - `Light` (default)
  - `Dark` (system preference or `[data-theme="dark"]`)
  - `High Contrast Light` (`[data-theme="high-contrast-light"]`)
  - `High Contrast Dark` (`[data-theme="high-contrast-dark"]`)
- **Zero Flash of Wrong Theme**: Guaranteed via `<head>` initialization script.

---

## 🧩 Components

### Official `@material/web` Components
- **Buttons**: Filled, Elevated, Filled Tonal, Outlined, Text, FAB, Icon Buttons.
- **Inputs & Selects**: Filled Text Field, Outlined Text Field, Select, Checkbox, Radio, Switch, Slider.
- **Chips**: Assist, Filter, Input, Suggestion chips.
- **Navigation & Tabs**: Tabs, Primary Tab, Secondary Tab.
- **Lists & Menus**: List, List Item, Menu, Menu Item, Divider.
- **Overlays & Progress**: Dialog, Linear Progress, Circular Progress.

### Spec-Built Custom Components
- `bte-card`: Elevated, Filled, and Outlined cards with standard M3 hover/focus states and elevation layers.
- `bte-navigation`: Automatically adapts across **Compact** (< 600px, bottom bar), **Medium** (600–839px, navigation rail), and **Expanded** (>= 840px, navigation drawer).
- `bte-top-app-bar`: Standard M3 64px header with title and action slots.
- `bte-bottom-app-bar`: Standard M3 80dp bottom bar with action icons and integrated FAB.
- `bte-badge`: Small dot and large numeric badges for notification anchors.
- `bte-search`: Floating M3 search bar with active states.
- `bte-segmented-button`: Connected segmented buttons with active checkmark and selection states.
- `bte-snackbar`: Toast notification system with action triggers and dismiss timers.
- `bte-state-container`: Spec-compliant empty, loading, and error states with retry actions.
- `bte-tooltip`: Plain (24dp) and Rich (interactive with action) tooltip controllers.
- `bte-bottom-sheet`: Mobile modal & standard bottom sheets with drag handle and backdrop dismissal.
- `bte-side-sheet`: Wide-screen 400dp side sheet panel for contextual workflows.
- `bte-date-picker`: Complete calendar month grid with year/month pagination and selection pill.
- `bte-time-picker`: Interactive clock face dial and digital input switching with AM/PM toggle.
- `bte-carousel`: Multi-browse and Hero scroll snap collections.
- `bte-dynamic-color`: Client-side Material You dynamic tonal palette generator.

---

## 🤖 Guidelines for AI Agents

When consuming this repository for new web apps:
1. Always read [`AGENTS.md`](./AGENTS.md) and [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) first.
2. Link [`styles/theme.css`](./styles/theme.css) and [`styles/base.css`](./styles/base.css) in your HTML.
3. Import only the individual `@material/web` components needed.
4. Duplicate [`pages/starter-template.html`](./pages/starter-template.html) when creating any new page or view.

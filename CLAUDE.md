# CLAUDE.md — Agent & Assistant Guidelines

## Mandatory Single Source of Truth
This repository is the canonical **Google Material Design 3 (M3) Design System & Component Library**.
Every AI agent or assistant operating on this project MUST strictly follow the design system rules, tokens, and components defined here. **Deviations, alternative design libraries, and non-token styling are strictly prohibited.**

### Non-Negotiable Rules
1. **Source of Truth Hierarchy**:
   - `DESIGN-SYSTEM.md` is the absolute design authority.
   - `styles/theme.css` is the sole source of design tokens (colors, typography, shape, elevation, motion).
   - `styles/base.css` holds base resets and typography utility classes.
   - `components/` holds pre-built, WCAG 2.2 AA compliant M3 custom web components.
   - `pages/starter-template.html` is the mandatory foundation for all new views.
2. **Zero External CSS Frameworks**:
   - NEVER suggest, install, or import Tailwind CSS, Bootstrap, Chakra UI, Ant Design, Bulma, or any other UI framework.
3. **Zero Inline Styles & Zero Hardcoded Colors**:
   - NEVER write `style="..."` attributes on HTML elements.
   - NEVER use raw hex (`#fff`), rgb, or hsl colors anywhere outside `styles/theme.css`. Always use CSS variables: `var(--md-sys-color-*)`.
4. **Component Selection Order**:
   - Use official `@material/web` elements (`md-filled-button`, `md-outlined-text-field`, etc.).
   - Use custom spec components in `components/` (`bte-bottom-sheet`, `bte-date-picker`, `bte-side-sheet`, `bte-carousel`, etc.).
   - If a new component is needed, construct it using standard semantic HTML and M3 CSS tokens.
5. **Accessibility (WCAG 2.2 AA)**:
   - Provide skip links (`.skip-link`), visible focus outlines (`:focus-visible`), and correct `aria-*` attributes.
   - Always ensure high-contrast and dark theme compatibility via CSS token variables.

## Common Developer Commands
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev`
- **Build & verify multi-page production bundle**: `npm run build` or `npm test`
- **Test command**: `npm test` (executes `vite build` across all pages with zero errors)

## Project Layout
```
/
├── DESIGN-SYSTEM.md           # Master M3 specification and rules
├── AGENTS.md                  # Universal AI agent instructions
├── CLAUDE.md                  # Claude Code instructions
├── .cursorrules               # Cursor / Windsurf rules
├── .github/copilot-instructions.md # GitHub Copilot Workspace rules
├── styles/
│   ├── theme.css              # M3 design tokens (colors, elevation, shape)
│   └── base.css               # Typography and CSS resets
├── components/                # Pure vanilla M3 web components (bte-*)
├── pages/                     # Production HTML views
│   ├── starter-template.html  # Base scaffold for new pages
│   ├── index.html, login.html, settings.html, profile.html, etc.
└── docs/                      # Component catalog and token reference
```

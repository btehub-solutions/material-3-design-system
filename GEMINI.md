# GEMINI.md — Google Antigravity IDE & Agent Instructions

# MANDATORY SINGLE SOURCE OF TRUTH FOR ALL ANTIGRAVITY AGENTS
This repository is the canonical **Google Material Design 3 (M3) Design System & Component Library**.
Every Google Antigravity Agent and Antigravity IDE session MUST strictly follow the design system rules, tokens, and components defined here. **Deviations, alternative design libraries, and non-token styling are strictly prohibited.**

## Priority Order When Instructions Conflict
1. Security and accessibility (WCAG 2.2 AA)
2. `DESIGN-SYSTEM.md` (Absolute authority for all styling, tokens, and components)
3. `AGENTS.md`
4. The user's current request

If a user request breaks M3, do not silently comply: follow M3, explain the conflict, and provide the spec-compliant alternative.

## Non-Negotiable Directives
1. **Zero External CSS Frameworks**:
   - NEVER suggest, install, or import Tailwind CSS, Bootstrap, Chakra UI, Ant Design, Bulma, or any other UI framework.
2. **Zero Inline Styles & Zero Hardcoded Colors**:
   - NEVER write `style="..."` attributes on HTML elements.
   - NEVER use raw hex (`#fff`), rgb, or hsl colors anywhere outside `styles/theme.css`. Always use CSS variables: `var(--md-sys-color-*)`.
3. **Component Selection Order**:
   - Step 1: Use official `@material/web` elements (`md-filled-button`, `md-outlined-text-field`, `md-navigation-bar`, etc.).
   - Step 2: Use custom project components in `components/` (`bte-bottom-sheet`, `bte-date-picker`, `bte-side-sheet`, `bte-carousel`, `bte-tooltip`, `bte-time-picker`, `bte-bottom-app-bar`, etc.).
   - Step 3: If a new component is needed, construct it using standard semantic HTML and M3 CSS custom properties from `styles/theme.css`. Always prefix with `bte-`.
4. **New Pages & Views**:
   - ALWAYS clone `pages/starter-template.html` when building new views.
5. **Accessibility (WCAG 2.2 AA)**:
   - Provide skip links (`.skip-link`), visible focus outlines (`:focus-visible`), and correct `aria-*` attributes.
   - Always ensure high-contrast and dark theme compatibility via CSS token variables.

## Antigravity CLI & Dev Commands
- **Dev Server**: `npm run dev`
- **Build / Test**: `npm test` or `npm run build`
- **Install**: `npm install` (pins `@material/web@2.5.0` exactly)

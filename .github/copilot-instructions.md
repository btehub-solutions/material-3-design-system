# GitHub Copilot Instructions — Material 3 Design System

You are assisting in a repository governed strictly by the **BTEHub Material Design 3 (M3) Design System**.

---

## 🚨 MANDATORY DIRECTIVES (NON-NEGOTIABLE)

1. **Sole Source of Truth**:
   The files [`DESIGN-SYSTEM.md`](../DESIGN-SYSTEM.md), [`styles/theme.css`](../styles/theme.css), [`styles/base.css`](../styles/base.css), and [`components/`](../components/) constitute the **ONLY** authoritative source of truth for UI design, frontend implementation, and styling.

2. **No External CSS Frameworks**:
   **DO NOT** install, import, or generate Tailwind CSS, Bootstrap, Chakra UI, Bulma, or any external utility libraries. All styling is pure M3 web components and semantic CSS tokens.

3. **Zero Inline Styles & Zero Hardcoded Colors**:
   - **DO NOT** use inline `style="..."` attributes anywhere in HTML.
   - **DO NOT** hardcode hex, rgb, hsl, or named colors in HTML or CSS.
   - All colors, typography, shapes, elevations, motion durations, and spacing increments **MUST** resolve through CSS Custom Properties (`var(--md-sys-*)`) defined in `/styles/theme.css`.

4. **Component Selection Order**:
   - **First**: Use official `@material/web` (pinned to `2.5.0`) web components (e.g., `<md-filled-button>`, `<md-dialog>`, `<md-tabs>`, `<md-list>`, `<md-icon>`).
   - **Second**: Use spec-built custom components in `/components/` (`bte-*` prefix: cards, navigation bar/rail/drawer, date picker, time picker, bottom sheet, side sheet, tooltip, carousel, snackbar, badge).
   - **Third**: If a new component is needed, check `m3.material.io` and build strictly from spec using tokens. Never invent non-M3 patterns.

5. **Accessibility & RTL Requirements (WCAG 2.2 AA)**:
   - Every page must have a skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>`.
   - All content must reside inside semantic `<main id="main-content">`.
   - Use **logical CSS properties** (`margin-block`, `margin-inline`, `padding-block`, `padding-inline`, `inset-block`, `inset-inline`, `border-inline-end`) to guarantee bidirectional RTL readiness.
   - Every view must provide loading, empty, and error state handling.

6. **Page Creation**:
   Always duplicate [`pages/starter-template.html`](../pages/starter-template.html) as the baseline for any new page or view.

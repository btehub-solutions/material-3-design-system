# AGENTS.md

Instructions for every AI agent working in this project.
Version: 3.1
Checked against live sources: 2026-10-04
Owner: BTEHub Team

> [!IMPORTANT]
> **MANDATORY SINGLE SOURCE OF TRUTH FOR ALL AI AGENTS**
> This repository is the definitive Google Material Design 3 (M3) design system and component library.
> Any AI agent operating in or with this repository MUST use `DESIGN-SYSTEM.md`, `styles/theme.css`, `styles/base.css`, and `components/` as the **ONLY source of truth** for UI design, frontend implementation, and code generation.
> 
> - **NEVER** introduce, install, or use external CSS frameworks (e.g. Tailwind CSS, Bootstrap, Chakra, Bulma).
> - **NEVER** write inline `style="..."` attributes on HTML elements.
> - **NEVER** use hardcoded hex/rgb/hsl color values outside `styles/theme.css`.
> - **ALWAYS** use CSS variables: `var(--md-sys-color-*)`, `var(--md-sys-shape-*)`, `var(--md-sys-typescale-*)`.
> - **ALWAYS** clone `pages/starter-template.html` when building new views.

## 1. Read first

Before any UI task, read and follow `DESIGN-SYSTEM.md` in full.
It is the single source of truth for design. This file only adds project context and working rules.
If this file and `DESIGN-SYSTEM.md` conflict on design, `DESIGN-SYSTEM.md` wins.

For playful or illustration-led projects (Section 3 field "Illustration style" is not "none"), also read `ILLUSTRATION-GUIDE.md` in full. M3 wins on structure, accessibility, and tokens. The illustration guide governs illustration and brand art only.

### Priority order when instructions conflict

1. Security and accessibility (WCAG 2.2 AA)
2. `DESIGN-SYSTEM.md`
3. `ILLUSTRATION-GUIDE.md` (illustration and brand art only)
4. This file (`AGENTS.md`)
5. The user's current request

If a request breaks M3, do not silently comply. Follow M3, explain the conflict in one line, and offer the alternative.

## 2. First run verification (mandatory)

Open `DESIGN-SYSTEM.md` Section 14. If this is a playful project, also open `ILLUSTRATION-GUIDE.md` Section 15 and apply the same rules to it.

- If Status says "Verified: no" or "Verified: partial", complete the open items listed in Section 14 BEFORE building anything. For "partial", only the open items and links marked "Unverified" need checking.
- If Status says "Verified: yes", continue, unless one of these is true, in which case run the verification again:
  - `@material/web` was upgraded
  - The last verified date is older than 90 days
  - A link or component tag fails during your work

When verification is done:
1. Fix every wrong link, component tag, and breakpoint in `DESIGN-SYSTEM.md` (and wrong links in `ILLUSTRATION-GUIDE.md`).
2. Record the installed `@material/web` version in the Status block and make sure `package.json` pins it exactly.
3. Update the Status block and the change log in each file you verified.
4. Give me a short summary of what you corrected and what you could not verify.

Do not change any rule itself without my approval. Only correct links, tags, breakpoints, and token names, and list new M3 guidance for me to decide on.

If you cannot open links or run the checks, say so clearly. Do not mark anything as verified.

## 3. Project context

Fill this in for each project. If a field is empty, ask. If you cannot ask, state your assumption and use the safest default.

- Product name: Material 3 Design System
- Product goal: Centralized Google M3 design system, token architecture, and component library for downstream AI agents and web apps
- Target users: Frontend developers, designers, and AI coding agents
- Brand source color (hex): #6750a4 (M3 Baseline Purple)
- Brand font (default: Roboto): Roboto
- Framework (default: plain HTML, CSS, JavaScript): plain HTML, CSS, JavaScript (web components)
- M3 Expressive: no (change to yes to allow Expressive patterns)
- Illustration style: none (change to playful or another style to activate `ILLUSTRATION-GUIDE.md`)
- Mascot or characters: none
- Illustration tool: Adobe Illustrator, exported as SVG
- Languages and RTL needs: English, RTL ready (logical CSS properties)
- Hosting and deployment: GitHub / GitHub Pages / Static Hosting

## 4. Commands

Fill in for each project.

- Install: npm install
- Run dev server: npm run dev
- Build: npm run build
- Test: npm test
- Lint:
- Accessibility check (axe):
- Performance check (Lighthouse):

If a command is empty, ask. Do not invent commands.

## 5. Design rules (summary only)

This is a summary. The full rules are in `DESIGN-SYSTEM.md`.

- Material Design 3 only. Reference: https://m3.material.io
- Colors, type, shape, and motion come from tokens in `/styles/theme.css`. Never hardcode values.
- Pin `@material/web` to an exact version (latest found 2026-10-04: 2.5.0). Install from npm, no CDN in production. Build missing components from the M3 spec.
- Mobile first, light, dark, and high contrast, WCAG 2.2 AA.
- Every page has loading, empty, and error states.
- Never invent tokens, components, or links. If unsure, check m3.material.io and say so.
- Playful projects: illustrations use M3 color tokens, work in dark mode, have correct alt text, stay within size budgets, and have licenses recorded.

## 6. Project structure

```
/styles/theme.css     tokens only
/styles/base.css      reset, global styles, typography classes
/components           custom components (prefixed)
/pages
/assets
/docs
DESIGN-SYSTEM.md
ILLUSTRATION-GUIDE.md (playful projects only)
AGENTS.md
```

## 7. How to work

1. Complete Section 2 first if verification is due.
2. Confirm the project context in Section 3 before building.
3. Search the project for an existing component before creating one. Reuse it. Never duplicate.
4. Only change what was asked. Do not redesign or refactor unrelated parts.
5. For large tasks, state a short plan first, then build.
6. Use small commits with clear messages.
7. Do not add dependencies without asking. The only exception is `@material/web`, pinned to an exact version, as required by `DESIGN-SYSTEM.md`.
8. Never put secrets or API keys in frontend code.
9. Never delete files or rewrite large areas without confirmation.

## 8. Before you finish

Run the checks in Section 4 and confirm the Definition of done in `DESIGN-SYSTEM.md` Section 11:

- [ ] Responsive on compact, medium, and expanded
- [ ] Light, dark, and high contrast themes work
- [ ] Keyboard navigation and visible focus
- [ ] axe check passes
- [ ] Lighthouse above 90
- [ ] No hardcoded colors, fonts, or spacing outside `/styles/theme.css`
- [ ] No inline styles

## 9. Report after every build

```
M3 components used:
Tokens used:
Layouts used:
Custom components built (and why):
Assumptions made:
Unsure about:
Broken links found:
Checks run and results:
Illustrations used and licenses recorded (playful projects only):
```

## 10. When blocked

- Link fails: search m3.material.io for the topic, report the broken link, and log it in `DESIGN-SYSTEM.md` Section 14.
- Information missing: ask. If you cannot ask, state the assumption and continue with the safest default.
- Tool or command unavailable: say so. Do not pretend a check passed.

---

BTEHub Team

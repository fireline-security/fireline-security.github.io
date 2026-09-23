# AGENTS.md

## Purpose

This repository is Fireline's public project overview. It explains the project's vision and directs visitors to the four source repositories. It is not product documentation, a dashboard, or a hosted interface to fireline-core.

## What to avoid

- Do not claim that prototype capabilities are production-ready, or invent product metrics, customer stories, integrations, security guarantees, or roadmap dates.
- Do not duplicate component documentation here. Link visitors to the owning repository for setup instructions, API contracts, and design rationale.
- Do not add a runtime API, authentication, analytics, cookies, or a backend: GitHub Pages serves this static site.
- Do not add numbered concept labels or fabricated data visualizations. The site can explain Fireline's vocabulary without turning concepts into metrics.
- Do not change Vite's `base` away from `/`; this is an organization-site repository served from the root GitHub Pages URL.

## What to ensure

- Keep the paper/ink/fire design system and responsive, keyboard-accessible layout consistent with `fireline-web` where the projects overlap.
- Add or update a focused Vitest assertion when changing public copy, navigation, or destination links.
- Run `pnpm lint`, `pnpm test`, and `pnpm build` before a change is done.
- Keep GitHub Pages deployment in `.github/workflows/deploy-pages.yml` and deploy only from `develop`.

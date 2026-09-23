# Contributing to the Fireline project site

## Dev setup

Requires Node 20+ and pnpm. The site is fully static and does not need fireline-core or another local service running.

```sh
pnpm install
pnpm dev
```

## Code style

TypeScript's compiler (`pnpm build`) is the type check. `pnpm lint` runs Biome for linting and formatting; `pnpm lint:fix` applies its auto-fixes.

## Testing

Run `pnpm test` and `pnpm build` before opening a pull request. The tests cover the page's principal public copy, navigation landmark, and the source links for every published project component.

## Content standards

Describe Fireline's current capabilities precisely. Project vision is welcome in the hero and narrative sections, but claims about a component must agree with that component's README and documentation. Do not add usage metrics, security guarantees, product screenshots, roadmap dates, or integrations that are not backed by a public source repository.

## Commit messages

Describe the *why*, not just the *what*: the diff already shows what changed.

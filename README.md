# Fireline project site

The public landing page for [Fireline](https://github.com/fireline-security): open-source security policy infrastructure that keeps scanner evidence close to the decisions it informs. It is a static SolidJS + TypeScript + Vite site, published from this repository with GitHub Pages.

This is a project overview, not product documentation or a hosted Fireline application. The component cards link to the source repositories, which own their respective setup, API, and contribution details.

## Running locally

Requires Node 20+ and pnpm.

```sh
pnpm install
pnpm dev
```

## Validation

```sh
pnpm lint
pnpm test
pnpm build
```

`pnpm build` type-checks the app and produces the static `dist/` directory. `pnpm test` verifies the landing-page structure and its repository links.

## Publishing

GitHub Actions validates pull requests and deploys the built site after a push to `develop`. In the repository's **Settings → Pages**, set the source to **GitHub Actions** once before the first deployment. The organization-site repository name publishes the site at `https://fireline-security.github.io/`.

## Project components

- [fireline-spec](https://github.com/fireline-security/fireline-spec): the canonical, versioned Observation contract.
- [fireline-adapters](https://github.com/fireline-security/fireline-adapters): scanner-report converters that emit Observation JSON.
- [fireline-core](https://github.com/fireline-security/fireline-core): the application binary, policy engine, storage, and CLI.
- [fireline-web](https://github.com/fireline-security/fireline-web): the Watchtower prototype UI for core data.

## License

Apache-2.0. See [LICENSE](LICENSE).

import { For } from 'solid-js'

interface ProjectComponent {
  description: string
  detail: string
  href: string
  name: string
  status: string
}

const components: ProjectComponent[] = [
  {
    name: 'fireline-spec',
    status: 'Available today',
    description: 'The canonical, versioned Observation contract.',
    detail:
      'JSON Schema and fixtures that give adapters and core one durable wire format.',
    href: 'https://github.com/fireline-security/fireline-spec',
  },
  {
    name: 'fireline-adapters',
    status: 'Prototype adapters',
    description: 'Bring scanner output into the Observation contract.',
    detail:
      'Gitleaks, Trivy, Aikido, and Semgrep converters preserve the source report while emitting portable JSON.',
    href: 'https://github.com/fireline-security/fireline-adapters',
  },
  {
    name: 'fireline-core',
    status: 'Walking skeleton',
    description: 'The application binary, policy engine, and CLI.',
    detail:
      'Stores immutable Observations and evaluates YAML/CEL Firelines into explainable Crossings.',
    href: 'https://github.com/fireline-security/fireline-core',
  },
  {
    name: 'fireline-web',
    status: 'Prototype UI',
    description: 'A Watchtower view for real core data.',
    detail:
      'A read-only Solid dashboard that makes today’s Observations visible without inventing domain data.',
    href: 'https://github.com/fireline-security/fireline-web',
  },
]

const principles = [
  {
    title: 'Keep source truth',
    body: 'A security tool made a claim. Preserve its severity, identity, and raw evidence instead of collapsing it into an opaque score.',
  },
  {
    title: 'Draw policy in the open',
    body: 'Firelines are readable rules. Their meaning should be inspectable, reviewable, and portable with the evidence they evaluate.',
  },
  {
    title: 'Make crossings explainable',
    body: 'When evidence meets a policy boundary, the result should show exactly which observation crossed which line and why.',
  },
]

function Brand(props: { href: string; label: string }) {
  return (
    <a class="brand" href={props.href} aria-label={props.label}>
      <img src="/brand/fireline-wordmark-light.svg" alt="" />
    </a>
  )
}

function Arrow() {
  return (
    <span class="arrow" aria-hidden="true">
      ↗
    </span>
  )
}

function App() {
  return (
    <div class="site-shell">
      <a class="skip-link" href="#main-content">
        Skip to content
      </a>

      <header class="site-header">
        <div class="site-frame header-inner">
          <Brand href="#top" label="Fireline home" />
          <nav class="primary-nav" aria-label="Primary navigation">
            <a href="#approach">Approach</a>
            <a href="#components">Components</a>
            <a href="#build">Build with us</a>
          </nav>
          <a class="header-link" href="https://github.com/fireline-security">
            GitHub <Arrow />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section class="hero" id="top" aria-labelledby="hero-title">
          <div class="site-frame hero-grid">
            <div class="hero-copy">
              <p class="eyebrow">
                <span /> Open-source security infrastructure
              </p>
              <h1 id="hero-title">Security evidence you can hold.</h1>
              <p class="hero-lead">
                Fireline is building a durable, explainable path from the
                observations security tools make to the decisions teams need to
                stand behind.
              </p>
              <div class="hero-actions">
                <a
                  class="button button-fire"
                  href="https://github.com/fireline-security"
                >
                  Explore the source <Arrow />
                </a>
                <a class="text-link" href="#components">
                  See the foundation <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div class="line-map">
              <div class="map-header">
                <span>Signal terrain</span>
                <span>Policy terrain</span>
              </div>
              <svg
                class="terrain"
                viewBox="0 0 680 440"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path d="M-60 82C80 21 161 137 297 72s208 16 441-25" />
                <path d="M-52 133C76 68 174 190 304 123s202 22 422-31" />
                <path d="M-46 188C86 117 167 246 302 174s205 28 430-33" />
                <path d="M-40 246C90 174 183 305 317 232s202 24 422-33" />
                <path d="M-42 304C94 230 177 372 312 294s216 25 431-39" />
                <path d="M-34 363C100 292 179 433 320 351s216 22 425-41" />
              </svg>
              <div class="map-route" aria-hidden="true">
                <span class="route-point route-start" />
                <span class="route-path" />
                <span class="route-point route-end" />
              </div>
              <div class="signal-card signal-card-source">
                <span class="signal-label">Smoke</span>
                <strong>Source evidence</strong>
                <small>Tool claims remain intact.</small>
              </div>
              <div class="signal-card signal-card-policy">
                <span class="signal-label">Fireline</span>
                <strong>Readable policy</strong>
                <small>Rules meet real context.</small>
              </div>
              <div class="signal-card signal-card-result">
                <span class="signal-label">Crossing</span>
                <strong>Explainable result</strong>
                <small>A result carries its context.</small>
              </div>
            </div>
          </div>
        </section>

        <section class="intro-band" aria-label="Fireline vision">
          <div class="site-frame intro-layout">
            <p class="section-kicker">The work ahead</p>
            <p>
              Security teams do not need another black box that flattens
              evidence into a number. They need a shared line between what a
              source observed, what a team accepts, and what needs attention.
            </p>
          </div>
        </section>

        <section
          class="section principles"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div class="site-frame">
            <div class="section-heading split-heading">
              <div>
                <p class="section-kicker">The approach</p>
                <h2 id="approach-title">Make the boundary legible.</h2>
              </div>
              <p>
                Fireline treats security evidence as a chain of custody, not a
                leaderboard. The model stays small enough to explain and strong
                enough to grow with the work.
              </p>
            </div>
            <div class="principle-grid">
              <For each={principles}>
                {(principle) => (
                  <article class="principle">
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </article>
                )}
              </For>
            </div>
          </div>
        </section>

        <section class="section system" aria-labelledby="system-title">
          <div class="site-frame">
            <div class="section-heading centered-heading">
              <p class="section-kicker">A shared vocabulary</p>
              <h2 id="system-title">From signal to a line you can defend.</h2>
            </div>
            <ol class="system-flow">
              <li>
                <strong>Tools</strong>
                <p>Scanners report what they found.</p>
              </li>
              <li>
                <strong>Smoke</strong>
                <p>Observations preserve source truth.</p>
              </li>
              <li>
                <strong>Fireline</strong>
                <p>Policy states the boundary.</p>
              </li>
              <li>
                <strong>Crossing</strong>
                <p>Evidence meets policy, visibly.</p>
              </li>
              <li>
                <strong>Watchtower</strong>
                <p>People see the line today.</p>
              </li>
            </ol>
          </div>
        </section>

        <section
          class="section components"
          id="components"
          aria-labelledby="components-title"
        >
          <div class="site-frame">
            <div class="section-heading split-heading">
              <div>
                <p class="section-kicker">Foundation in the open</p>
                <h2 id="components-title">Build on what is real.</h2>
              </div>
              <p>
                Fireline is under active development. These repositories mark
                the working foundation today and link directly to their source,
                scope, and contribution guidance.
              </p>
            </div>
            <div class="component-grid">
              <For each={components}>
                {(component) => (
                  <a
                    class="component-card"
                    href={component.href}
                    aria-label={`Explore ${component.name}`}
                  >
                    <div class="component-topline">
                      <span class="status-pill">{component.status}</span>
                      <Arrow />
                    </div>
                    <h3>{component.name}</h3>
                    <p class="component-summary">{component.description}</p>
                    <p class="component-detail">{component.detail}</p>
                  </a>
                )}
              </For>
            </div>
          </div>
        </section>

        <section class="build" id="build" aria-labelledby="build-title">
          <div class="site-frame build-inner">
            <div>
              <p class="section-kicker">Build with us</p>
              <h2 id="build-title">
                The line is stronger when everyone can see it.
              </h2>
            </div>
            <div class="build-copy">
              <p>
                Explore the source, read each component’s contribution guide,
                and help shape security policy infrastructure that stays close
                to the evidence.
              </p>
              <a
                class="button button-light"
                href="https://github.com/fireline-security"
              >
                Visit Fireline on GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="site-frame footer-inner">
          <Brand href="#top" label="Back to top" />
          <p>Open source under the Apache-2.0 license.</p>
          <a href="https://github.com/fireline-security">
            GitHub <Arrow />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

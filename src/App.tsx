import { For } from 'solid-js'

interface ProjectRepository {
  description: string
  href: string
  name: string
}

const repositories: ProjectRepository[] = [
  {
    name: 'fireline-spec',
    description: 'The shared evidence contract.',
    href: 'https://github.com/fireline-security/fireline-spec',
  },
  {
    name: 'fireline-adapters',
    description: 'Translators that preserve source evidence.',
    href: 'https://github.com/fireline-security/fireline-adapters',
  },
  {
    name: 'fireline-core',
    description: 'The policy engine and durable record.',
    href: 'https://github.com/fireline-security/fireline-core',
  },
  {
    name: 'fireline-web',
    description: 'The evolving Watchtower interface.',
    href: 'https://github.com/fireline-security/fireline-web',
  },
]

function Brand(props: { href: string; label: string; tone: 'dark' | 'light' }) {
  return (
    <a class="brand" href={props.href} aria-label={props.label}>
      <img src={`/brand/fireline-wordmark-${props.tone}.svg`} alt="" />
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
          <Brand href="#top" label="Fireline home" tone="dark" />
          <a
            class="source-link source-link-header"
            href="https://github.com/fireline-security"
          >
            Source <Arrow />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section class="hero" id="top" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="kicker">Open vulnerability &amp; risk management</p>
            <h1 id="hero-title">
              Define the line. <span class="stroke">Stop the spread.</span>
            </h1>
            <p class="hero-description">
              No company has perfect security posture. You can still define what
              risk can&apos;t cross, and build the visibility to know the moment
              it does.
            </p>
          </div>
          <div class="hero-art">
            <img
              src="/brand/fireline-mark-square.svg"
              alt="A fire lookout above a bright fireline winding through a mountain forest at dusk"
            />
            <div class="field-note">
              <b>The premise</b>
              <span>
                Scanners report smoke. Your team defines the fireline.
              </span>
            </div>
          </div>
        </section>

        <section class="smoke-problem" id="why" aria-labelledby="smoke-title">
          <div class="site-frame smoke-grid">
            <p class="section-kicker section-kicker-light">The smoke problem</p>
            <div class="smoke-copy">
              <h2 id="smoke-title">
                Every tool reports smoke. <span>Nobody sees the fire.</span>
              </h2>
              <p class="smoke-lead">
                Semgrep sees code. Trivy sees containers. OSV sees dependencies.
                Nuclei sees exposed systems. Each produces its own identifiers,
                severity model, lifecycle, and pile of JSON. Teams get more
                alerts. Situational awareness doesn&apos;t improve.
              </p>
              <div class="smoke-list">
                <article>
                  <h3>Smoke repeats</h3>
                  <p>
                    The same underlying risk appears several times with no
                    durable relationship.
                  </p>
                </article>
                <article>
                  <h3>Boundaries stay implicit</h3>
                  <p>
                    Everyone agrees “critical is bad.” Nobody has encoded where
                    tolerance ends.
                  </p>
                </article>
                <article>
                  <h3>Spread is invisible</h3>
                  <p>
                    Teams know what is open now. What crossed a boundary, or
                    keeps returning, is a separate question.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          class="definition-section"
          id="idea"
          aria-labelledby="premise-title"
        >
          <div class="definition-head">
            <div>
              <p class="section-kicker">Define your Fireline</p>
              <h2 id="premise-title">
                Posture is imperfect. <span>Boundaries can be clear.</span>
              </h2>
            </div>
            <p>
              A Fireline is a versioned, explainable boundary around
              unacceptable risk. It combines what scanners observed with the
              business context your scanners cannot know: exposure, environment,
              ownership, asset importance, age, and accepted exceptions.
            </p>
          </div>
        </section>

        <section class="map-section" aria-labelledby="map-title">
          <div class="site-frame map-heading">
            <div>
              <p class="section-kicker section-kicker-light">The concept</p>
              <h2 id="map-title">Smoke, fire, and the line between them.</h2>
            </div>
            <p>
              The ground stays messy. The line is the one thing somebody decided
              on purpose.
            </p>
          </div>
          <figure class="site-frame fireline-map">
            <img
              src="/brand/fireline-mapped-line.svg"
              alt="A topographic map with evidence signals crossing a bright Fireline boundary on their way toward a durable concern."
            />
            <figcaption>
              <span>Smoke</span>
              <span>Fireline</span>
              <span>Crossing</span>
              <span>Fire</span>
            </figcaption>
          </figure>
        </section>

        <section class="language" aria-labelledby="language-title">
          <div class="site-frame language-grid">
            <div class="language-heading">
              <p class="section-kicker">Vocabulary</p>
              <h2 id="language-title">Say it the same way every time.</h2>
            </div>
            <div class="language-list">
              <article>
                <h3>Smoke</h3>
                <p>
                  A single observation from one scanner run — Semgrep, Trivy,
                  Nuclei, or OSV&apos;s raw, unmerged claim.
                </p>
              </article>
              <article>
                <h3>Fire</h3>
                <p>
                  The durable, correlated concern that smoke adds up to over
                  time.
                </p>
              </article>
              <article>
                <h3>Fireline</h3>
                <p>
                  A versioned, explainable boundary your team draws around
                  unacceptable risk.
                </p>
              </article>
              <article>
                <h3>Crossing</h3>
                <p>A finding that broke a Fireline threshold.</p>
              </article>
              <article>
                <h3>Holding</h3>
                <p>
                  Everything still inside every threshold — nothing to page
                  anyone about.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="site-frame footer-top">
          <Brand href="#top" label="Back to top" tone="light" />
          <a class="source-link" href="https://github.com/fireline-security">
            Fireline on GitHub <Arrow />
          </a>
        </div>
        <nav class="site-frame repository-list" aria-label="Fireline sources">
          <For each={repositories}>
            {(repository) => (
              <a
                href={repository.href}
                aria-label={`Explore ${repository.name}`}
              >
                <span>{repository.name}</span>
                <span>{repository.description}</span>
                <Arrow />
              </a>
            )}
          </For>
        </nav>
        <div class="site-frame footer-bottom">
          <p>Open source under the Apache-2.0 license.</p>
          <p>Fireline / Define the line.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

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
          <div class="hero-grid">
            <div class="hero-copy">
              <p class="kicker">
                Vulnerability &amp; risk management, built in the open
              </p>
              <h1 id="hero-title">
                Define the line. <span class="stroke">Stop the spread.</span>
              </h1>
              <p class="hero-description">
                No company has perfect security posture. Fireline gives you a
                way to draw the line anyway — and know the second something
                crosses it.
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
                Nuclei sees exposed systems. Each is right about its own corner
                of the system and correct to know nothing about the rest — its
                own identifiers, its own severity model, its own pile of JSON.
                Wire them together and alerts multiply. Situational awareness
                doesn&apos;t.
              </p>
              <div class="smoke-list">
                <article>
                  <h3>Smoke repeats</h3>
                  <p>
                    The same risk shows up three different ways, from three
                    different tools — and nothing connects them.
                  </p>
                </article>
                <article>
                  <h3>Boundaries stay implicit</h3>
                  <p>
                    Everyone agrees “critical is bad.” Nobody&apos;s written
                    down where tolerance actually ends.
                  </p>
                </article>
                <article>
                  <h3>Spread is invisible</h3>
                  <p>
                    Teams can tell you what&apos;s open right now. Whether
                    it&apos;s getting worse is anyone&apos;s guess.
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
                Perfect posture is a myth.{' '}
                <span>An explainable boundary isn&apos;t.</span>
              </h2>
            </div>
            <p>
              A Fireline is a versioned, explainable boundary around
              unacceptable risk. Most platforms sell you one and lock the logic
              behind it. Fireline ships that logic as open source — read it, run
              it, change what doesn&apos;t fit. It combines what scanners
              observed with the context they can&apos;t see: exposure,
              environment, ownership, asset importance, age, and the exceptions
              someone actually signed off on.
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
              The ground stays messy. That&apos;s the scanners&apos; job. The
              line is the one thing your team decided on purpose — and can show
              anyone how they got there.
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
                <h3>Clear</h3>
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
          <p>Open source, Apache-2.0 licensed — read it, run it, fork it.</p>
          <p>Fireline / Define the line.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

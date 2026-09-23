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

function Rule() {
  return <span class="rule" aria-hidden="true" />
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
          <div class="site-frame hero-inner">
            <div class="hero-meta">
              <p>Security evidence, in public</p>
              <p>A line worth explaining</p>
            </div>
            <div class="hero-title-wrap">
              <h1 id="hero-title">
                Define the line. <em>Stop the spread.</em>
              </h1>
              <div class="hero-intro">
                <Rule />
                <p>
                  Fireline is building a way to keep security evidence, policy,
                  and judgment in the same frame.
                </p>
              </div>
            </div>
            <div class="hero-coordinate" aria-hidden="true">
              <span>39° 48′ N</span>
              <span>104° 54′ W</span>
            </div>
          </div>
        </section>

        <section class="premise" aria-labelledby="premise-title">
          <div class="site-frame premise-grid">
            <p class="section-kicker">The flawed posture</p>
            <div class="premise-copy">
              <h2 id="premise-title">
                Posture is imperfect. <span>Boundaries can be clear.</span>
              </h2>
              <p>
                A Fireline is a versioned, explainable boundary around
                unacceptable risk. It combines what scanners observed with the
                business context scanners cannot know: exposure, environment,
                ownership, asset importance, age, and accepted exceptions.
              </p>
              <p class="premise-emphasis">
                The result is a boundary a team can inspect, revise, and stand
                behind.
              </p>
            </div>
          </div>
        </section>

        <section class="refusal" aria-labelledby="refusal-title">
          <div class="site-frame refusal-inner">
            <p class="section-kicker">A refusal</p>
            <div>
              <h2 id="refusal-title">No shortcuts through the hard part.</h2>
              <div class="refusal-lines">
                <p>
                  <span>Not</span> an opaque score that asks to be trusted.
                </p>
                <p>
                  <span>Not</span> a flattened queue that forgets where a claim
                  came from.
                </p>
                <p>
                  <span>Not</span> a system that calls correlation solved before
                  the evidence can bear it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="map-section" aria-labelledby="map-title">
          <div class="site-frame map-heading">
            <div>
              <p class="section-kicker section-kicker-light">The line</p>
              <h2 id="map-title">Hold the whole path in view.</h2>
            </div>
            <p>
              A future security decision should be able to travel in both
              directions: from source evidence to a durable concern, and back
              again without losing its shape.
            </p>
          </div>
          <figure class="site-frame fireline-map">
            <img
              src="/brand/fireline-mapped-line.svg"
              alt="A topographic map with evidence signals crossing a bright Fireline boundary on their way toward a durable concern."
            />
            <figcaption>
              <span>Evidence</span>
              <span>Policy</span>
              <span>Crossing</span>
              <span>Concern</span>
            </figcaption>
          </figure>
        </section>

        <section class="language" aria-labelledby="language-title">
          <div class="site-frame language-grid">
            <div class="language-heading">
              <p class="section-kicker">A common language</p>
              <h2 id="language-title">Nothing should disappear on the way.</h2>
            </div>
            <div class="language-list">
              <article>
                <h3>Evidence</h3>
                <p>
                  A claim, held with the source and context that gave it
                  meaning.
                </p>
              </article>
              <article>
                <h3>Policy</h3>
                <p>
                  A readable, versioned boundary that can be examined before it
                  is enforced.
                </p>
              </article>
              <article>
                <h3>Crossing</h3>
                <p>
                  A result that keeps the observed evidence beside the line it
                  met.
                </p>
              </article>
              <article>
                <h3>Concern</h3>
                <p>
                  The durable issue that takes shape when repeated evidence or
                  disagreement needs attention.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="watchtower" aria-labelledby="watchtower-title">
          <div class="site-frame watchtower-grid">
            <p class="section-kicker section-kicker-light">The horizon</p>
            <div>
              <p class="watchtower-mark" aria-hidden="true">
                / WATCHTOWER
              </p>
              <h2 id="watchtower-title">
                A place for the concern, not just the signal.
              </h2>
              <p>
                Watchtower is the future place where recurring evidence can
                become an explainable concern—without severing the thread to
                every observation and every line it crossed.
              </p>
            </div>
          </div>
        </section>

        <section class="question" aria-labelledby="question-title">
          <div class="site-frame question-inner">
            <p class="section-kicker">The question</p>
            <h2 id="question-title">
              When a security decision is challenged, can it show its work?
            </h2>
            <p>
              Fireline is being built in the open for teams who think the answer
              should be yes.
            </p>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="site-frame footer-top">
          <Brand href="#top" label="Back to top" />
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

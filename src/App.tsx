import { For } from 'solid-js'

interface ProjectRepository {
  description: string
  href: string
  name: string
}

const concepts = [
  {
    name: 'Smoke',
    description:
      'An Observation: one claim from one tool run, kept with the source context that gave it meaning.',
  },
  {
    name: 'Fireline',
    description:
      'A readable policy boundary, expressed in versioned text and open to inspection before it is enforced.',
  },
  {
    name: 'Crossing',
    description:
      'A result that keeps both sides in view: the evidence that was observed and the line it met.',
  },
]

const repositories: ProjectRepository[] = [
  {
    name: 'fireline-spec',
    description: 'The versioned Observation contract and its fixtures.',
    href: 'https://github.com/fireline-security/fireline-spec',
  },
  {
    name: 'fireline-adapters',
    description: 'Small translators for scanner reports and source evidence.',
    href: 'https://github.com/fireline-security/fireline-adapters',
  },
  {
    name: 'fireline-core',
    description: 'The application binary, storage seam, and policy engine.',
    href: 'https://github.com/fireline-security/fireline-core',
  },
  {
    name: 'fireline-web',
    description: 'A Watchtower prototype for seeing real Observations.',
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
            <a href="#thinking">Why Fireline</a>
            <a href="#language">Language</a>
            <a href="#work">The work</a>
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
              <p class="eyebrow">A project about security evidence</p>
              <h1 id="hero-title">Keep the evidence close.</h1>
              <p class="hero-lead">
                Fireline is an open-source project about the distance between a
                scanner’s observation and a team’s decision. It is exploring a
                more durable way to keep that distance visible.
              </p>
              <a class="quiet-link" href="#thinking">
                Read the thinking <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div class="hero-art" aria-hidden="true">
              <p>Fireline / in public</p>
              <img src="/brand/fireline-wordmark-light.svg" alt="" />
              <svg
                viewBox="0 0 720 220"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path d="M-20 177C76 179 73 61 201 74c115 11 101 119 217 99 103-18 103-138 235-117 45 7 69 35 93 48" />
                <path d="M-12 194C94 195 94 96 204 109c104 12 96 93 203 80 99-12 100-99 232-80 40 6 69 27 101 36" />
              </svg>
              <span>Observe · Define · Understand</span>
            </div>
          </div>
        </section>

        <section
          class="statement"
          id="thinking"
          aria-labelledby="thinking-title"
        >
          <div class="site-frame statement-grid">
            <p class="section-label">Why Fireline</p>
            <div>
              <h2 id="thinking-title">The source is part of the decision.</h2>
              <p class="statement-detail">
                Security work gathers claims from many tools, then asks people
                to decide what they mean. That handoff is where context is often
                lost: a finding becomes a score, a ticket, or a verdict without
                a clear path back to the evidence.
              </p>
              <p class="statement-conclusion">
                Fireline starts with a quieter premise. Keep the observation
                intact. Make the policy readable. Let the result show its work.
              </p>
            </div>
          </div>
        </section>

        <section
          class="vocabulary"
          id="language"
          aria-labelledby="language-title"
        >
          <div class="site-frame">
            <div class="section-heading">
              <p class="section-label">A shared language</p>
              <h2 id="language-title">
                A small vocabulary for a difficult problem.
              </h2>
            </div>
            <div class="concept-grid">
              <For each={concepts}>
                {(concept) => (
                  <article class="concept">
                    <h3>{concept.name}</h3>
                    <p>{concept.description}</p>
                  </article>
                )}
              </For>
            </div>
          </div>
        </section>

        <section class="work" id="work" aria-labelledby="work-title">
          <div class="site-frame">
            <div class="work-intro">
              <div>
                <p class="section-label">The work</p>
                <h2 id="work-title">Small parts, visible seams.</h2>
              </div>
              <p>
                The project is being built as a set of explicit pieces. The
                source is the record of what each piece can actually do today.
              </p>
            </div>
            <div class="repository-list">
              <For each={repositories}>
                {(repository) => (
                  <a
                    href={repository.href}
                    aria-label={`Explore ${repository.name}`}
                  >
                    <span>{repository.name}</span>
                    <p>{repository.description}</p>
                    <Arrow />
                  </a>
                )}
              </For>
            </div>
          </div>
        </section>

        <section class="closing" aria-labelledby="closing-title">
          <div class="site-frame closing-inner">
            <p class="section-label">In progress</p>
            <h2 id="closing-title">
              Fireline is being built in public, with the decisions left
              visible.
            </h2>
            <a
              class="quiet-link quiet-link-dark"
              href="https://github.com/fireline-security"
            >
              Read the source <Arrow />
            </a>
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

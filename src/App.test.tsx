import { render, screen } from '@solidjs/testing-library'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the prototype Fireline language and paper-header source link', () => {
    render(() => <App />)

    expect(
      screen.getByRole('heading', {
        name: 'Define the line. Stop the spread.',
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('heading', {
        name: 'Every tool reports smoke. Nobody sees the fire.',
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('heading', {
        name: "Perfect posture is a myth. An explainable boundary isn't.",
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('link', { name: 'Source' }).getAttribute('href'),
    ).toBe('https://github.com/fireline-security')
    expect(
      document.querySelector('.site-header .brand img')?.getAttribute('src'),
    ).toBe('/brand/fireline-wordmark-dark.svg')
    expect(
      screen.getByText('Semgrep sees code. Trivy sees containers.', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByText('A finding that broke a Fireline threshold.', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByText('Everything still inside every threshold', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByText('know the second something crosses it', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByText('Fireline ships that logic as open source', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByText('read it, run it, fork it', {
        exact: false,
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('img', {
        name: 'A fire lookout above a bright fireline winding through a mountain forest at dusk',
      }),
    ).toBeTruthy()
    expect(
      screen.getByRole('img', {
        name: 'A topographic map with evidence signals crossing a bright Fireline boundary on their way toward a durable concern.',
      }),
    ).toBeTruthy()
  })

  it('links each Fireline project repository to its source', () => {
    render(() => <App />)

    const repositories = [
      'fireline-spec',
      'fireline-adapters',
      'fireline-core',
      'fireline-web',
    ]

    for (const repository of repositories) {
      const link = screen.getByRole('link', {
        name: `Explore ${repository}`,
      })
      expect(link.getAttribute('href')).toBe(
        `https://github.com/fireline-security/${repository}`,
      )
    }

    expect(
      screen
        .getByRole('link', { name: 'Fireline on GitHub' })
        .getAttribute('href'),
    ).toBe('https://github.com/fireline-security')
  })
})

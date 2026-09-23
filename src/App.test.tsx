import { render, screen } from '@solidjs/testing-library'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the project story and primary navigation', () => {
    render(() => <App />)

    expect(
      screen.getByRole('heading', { name: 'Security evidence you can hold.' }),
    ).toBeTruthy()
    expect(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeTruthy()
    expect(
      screen.getByRole('link', { name: /explore the source/i }),
    ).toBeTruthy()
  })

  it('links each published Fireline component to its source repository', () => {
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
  })
})

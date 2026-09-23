import { render, screen } from '@solidjs/testing-library'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the project vision and primary navigation', () => {
    render(() => <App />)

    expect(
      screen.getByRole('heading', { name: 'Keep the evidence close.' }),
    ).toBeTruthy()
    expect(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeTruthy()
    expect(screen.getByText('The source is part of the decision.')).toBeTruthy()
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
  })
})

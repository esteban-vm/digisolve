import type { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import Navigation from './Navigation'

export default {
  component: Navigation,
  title: 'Components/Navigation',
  decorators: [
    (Story, context) => {
      return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
          <Story {...context} />
        </div>
      )
    },
  ],
} as Meta<typeof Navigation>

export const NavigationExample: StoryObj<typeof Navigation> = {
  play() {
    const links = screen.getAllByRole('link')
    const logoImg = screen.getByRole('img')

    for (const link of links) {
      userEvent.click(link)
    }

    userEvent.hover(logoImg)
    userEvent.unhover(logoImg)
  },
}

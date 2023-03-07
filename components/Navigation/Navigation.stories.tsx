import type { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import Navigation from './Navigation'

export default {
  component: Navigation,
  title: 'Components/Navigation',
  decorators: [
    (Story) => {
      return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
          <Story />
        </div>
      )
    },
  ],
} as Meta<typeof Navigation>

export const NavigationExample: StoryObj<typeof Navigation> = {
  play() {
    const [homeLink, contactLink, aboutLink] = screen.getAllByRole('link')
    const logoImg = screen.getByRole('img')

    userEvent.hover(logoImg)
    userEvent.unhover(logoImg)

    userEvent.click(homeLink)
    userEvent.click(contactLink)
    userEvent.click(aboutLink)
  },
}

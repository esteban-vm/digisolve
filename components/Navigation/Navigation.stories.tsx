import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/utils/styles'
import Navigation from './Navigation'

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--color-black);
`

export default {
  component: Navigation,
  title: 'Components/Navigation',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
} as Meta<typeof Navigation>

export const NavigationExample: StoryObj<typeof Navigation> = {
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')
    const logo = canvas.getByRole('img')
    for (const link of links) userEvent.click(link)
    userEvent.hover(logo)
    userEvent.unhover(logo)
  },
}

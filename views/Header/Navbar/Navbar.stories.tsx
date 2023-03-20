import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/utils/styles'
import Navbar from './Navbar'

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: var(--color-black);
`

export default {
  component: Navbar,
  title: 'Views/Header/Navbar',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
} as Meta<typeof Navbar>

export const NavbarExample: StoryObj<typeof Navbar> = {
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')
    const logo = canvas.getByRole('img')
    for (const link of links) userEvent.click(link)
    userEvent.hover(logo)
    userEvent.unhover(logo)
  },
}

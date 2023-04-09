import { type Meta, within, userEvent } from '@/stories'
import { styled } from '@/styles'
import Navbar from './Navbar'

const Wrapper = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(var(--color-overlay1), var(--color-overlay2)), url('/img/header-img.jpg');
  background-size: cover;
  background-position: top;
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
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')
    const logo = canvas.getByRole('img')
    for (const link of links) userEvent.click(link)
    userEvent.hover(logo)
    userEvent.unhover(logo)
  },
} as Meta<typeof Navbar>

export const Example = () => <Navbar />

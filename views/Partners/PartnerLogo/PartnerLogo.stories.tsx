import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/utils/styles'
import { logos } from '../Partners'
import PartnerLogo from './PartnerLogo'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;

  div {
    background-color: var(--color-light);
  }
`

export default {
  argTypes: {
    logo: {
      control: false,
    },
    alt: {
      control: false,
    },
    onMouseEnter: {
      action: true,
      control: false,
    },
  },
  component: PartnerLogo,
  title: 'Views/Partners/Logos',
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
    layout: 'centered',
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const logo = canvas.getByRole('img')
    userEvent.hover(logo)
  },
} as Meta<typeof PartnerLogo>

const [logo1, logo2, logo3, logo4] = logos

export const LogoExample1: StoryObj<typeof PartnerLogo> = { args: logo1 }
export const LogoExample2: StoryObj<typeof PartnerLogo> = { args: logo2 }
export const LogoExample3: StoryObj<typeof PartnerLogo> = { args: logo3 }
export const LogoExample4: StoryObj<typeof PartnerLogo> = { args: logo4 }

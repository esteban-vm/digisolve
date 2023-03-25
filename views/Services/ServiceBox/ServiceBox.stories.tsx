import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/styles'
import { services } from '../Services'
import ServiceBox from './ServiceBox'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;

  article {
    background-color: var(--color-light);
  }
`

export default {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: ServiceBox,
  title: 'Views/Services/Services',
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
    const link = canvas.getByRole('link')
    userEvent.hover(logo)
    userEvent.click(link)
  },
} as Meta<typeof ServiceBox>

const [service1, service2, service3, service4] = services

export const ServiceExample1: StoryObj<typeof ServiceBox> = { args: service1 }
export const ServiceExample2: StoryObj<typeof ServiceBox> = { args: service2 }
export const ServiceExample3: StoryObj<typeof ServiceBox> = { args: service3 }
export const ServiceExample4: StoryObj<typeof ServiceBox> = { args: service4 }

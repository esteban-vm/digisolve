import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/utils/styles'
import { services } from '@/views'
import ServiceItem from './ServiceItem'

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
    icon: {
      control: false,
    },
    onClick: {
      action: true,
      control: false,
    },
    onMouseEnter: {
      action: true,
      control: false,
    },
  },
  component: ServiceItem,
  title: 'Components/ServiceItem',
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
} as Meta<typeof ServiceItem>

const [service1, service2, service3, service4] = services

export const ServiceExample1: StoryObj<typeof ServiceItem> = { args: service1 }
export const ServiceExample2: StoryObj<typeof ServiceItem> = { args: service2 }
export const ServiceExample3: StoryObj<typeof ServiceItem> = { args: service3 }
export const ServiceExample4: StoryObj<typeof ServiceItem> = { args: service4 }

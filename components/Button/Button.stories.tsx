import type { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import Button from './Button'

export default {
  component: Button,
  title: 'Components/Button',
  parameters: { layout: 'centered' },
} as Meta<typeof Button>

export const ButtonExample: StoryObj<typeof Button> = {
  args: {
    children: 'Button Example',
    href: 'javascript:void(0)',
    isFull: true,
    role: 'button',
  },
  argTypes: {
    href: {
      control: false,
    },
    role: {
      control: false,
    },
    onClick: {
      action: true,
      control: false,
    },
  },
  play() {
    userEvent.click(screen.getByRole('button'))
  },
}

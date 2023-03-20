import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Button from './Button'

export default {
  args: {
    children: 'Button Example',
    href: 'javascript:void(0)',
  },
  argTypes: {
    href: {
      control: false,
    },
    onClick: {
      action: true,
      control: false,
    },
  },
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    userEvent.click(button)
  },
} as Meta<typeof Button>

export const BasicButton: StoryObj<typeof Button> = {
  args: {
    isFull: false,
  },
}

export const FullButton: StoryObj<typeof Button> = {
  args: {
    isFull: true,
  },
}

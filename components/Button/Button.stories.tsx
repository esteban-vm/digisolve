import { type Meta, type StoryObj, within, userEvent } from '@/stories'
import Button from './Button'

export default {
  args: {
    text: 'button example',
  },
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
    viewport: {
      disable: true,
    },
    controls: {
      exclude: /^(is(Full|Submit)|link|theme|className)$/,
    },
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    userEvent.click(button)
  },
} as Meta<typeof Button>

export const BasicExample: StoryObj<typeof Button> = {
  args: { isFull: false },
}

export const FullExample: StoryObj<typeof Button> = {
  args: { isFull: true },
}

export const SubmitExample: StoryObj<typeof Button> = {
  args: { isSubmit: true, isFull: true },
  argTypes: { isSubmit: { control: false } },
}

import type { Meta, StoryFn } from '@/stories'
import Icon from './Icon'

export default {
  args: {
    name: 'facebook-f',
    size: 3,
  },
  argTypes: {
    size: { control: { min: 2, max: 10 } },
  },
  component: Icon,
  title: 'Components/Icon',
  parameters: {
    layout: 'centered',
    viewport: {
      disable: true,
    },
    controls: {
      exclude: /^className$/i,
    },
  },
} as Meta<typeof Icon>

export const IconExamples: StoryFn<typeof Icon> = (args) => <Icon {...args} />

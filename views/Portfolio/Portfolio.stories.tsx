import type { Meta } from '@/stories'
import Portfolio from './Portfolio'

export default {
  component: Portfolio,
  title: 'Views/Portfolio',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Portfolio>

export const View = () => <Portfolio />

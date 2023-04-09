import type { Meta } from '@/stories'
import About from './About'

export default {
  component: About,
  title: 'Views/About',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof About>

export const View = () => <About />

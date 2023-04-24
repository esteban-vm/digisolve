import type { Meta } from '@/stories'
import HomePage from '@/pages'

export default {
  title: 'Home',
  component: HomePage,
  parameters: {
    backgrounds: {
      disable: true,
    },
    viewport: {
      defaultViewport: 'large',
    },
  },
} as Meta

export const Home = () => <HomePage />

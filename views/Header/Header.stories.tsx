import type { Meta } from '@/stories'
import Header from './Header'

export default {
  component: Header,
  title: 'Views/Header',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Header>

export const View = () => <Header />

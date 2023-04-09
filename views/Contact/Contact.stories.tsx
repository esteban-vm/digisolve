import type { Meta } from '@/stories'
import Contact from './Contact'

export default {
  component: Contact,
  title: 'Views/Contact',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Contact>

export const View = () => <Contact />

import type { Meta } from '@/stories'
import Footer from './Footer'

export default {
  component: Footer,
  title: 'Views/Footer',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Footer>

export const View = () => <Footer />

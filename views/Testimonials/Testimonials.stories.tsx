import type { Meta } from '@/stories'
import Testimonials from './Testimonials'

export default {
  component: Testimonials,
  title: 'Views/Testimonials',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Testimonials>

export const View = () => <Testimonials />

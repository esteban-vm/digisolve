import type { Meta } from '@/stories'
import Partners from './Partners'

export default {
  component: Partners,
  title: 'Views/Partners',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Partners>

export const View = () => <Partners />

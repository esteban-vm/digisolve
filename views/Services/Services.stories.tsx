import type { Meta } from '@/stories'
import Services from './Services'

export default {
  component: Services,
  title: 'Views/Services',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Services>

export const View = () => <Services />

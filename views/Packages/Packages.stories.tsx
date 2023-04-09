import type { Meta } from '@/stories'
import Packages from './Packages'

export default {
  component: Packages,
  title: 'Views/Packages',
  parameters: {
    backgrounds: {
      disable: true,
    },
  },
} as Meta<typeof Packages>

export const View = () => <Packages />

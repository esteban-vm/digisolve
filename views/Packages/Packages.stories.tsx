import type { Meta } from '@storybook/react'
import Packages from './Packages'

export default {
  component: Packages,
  title: 'Views/Packages',
} as Meta<typeof Packages>

export const PackagesView = () => <Packages />

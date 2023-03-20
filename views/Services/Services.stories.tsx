import type { Meta } from '@storybook/react'
import Services from './Services'

export default {
  component: Services,
  title: 'Views/Services',
} as Meta<typeof Services>

export const ServicesView = () => <Services />

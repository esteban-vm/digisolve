import type { Meta } from '@storybook/react'
import Portfolio from './Portfolio'

export default {
  component: Portfolio,
  title: 'Views/Portfolio',
} as Meta<typeof Portfolio>

export const PortfolioView = () => <Portfolio />

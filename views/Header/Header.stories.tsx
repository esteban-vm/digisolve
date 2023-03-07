import type { Meta } from '@storybook/react'
import Header from './Header'

export default {
  component: Header,
  title: 'Views/Header',
} as Meta<typeof Header>

export const HeaderExample = () => <Header />

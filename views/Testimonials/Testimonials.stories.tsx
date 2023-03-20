import type { Meta } from '@storybook/react'
import Testimonials from './Testimonials'

export default {
  component: Testimonials,
  title: 'Views/Testimonials',
} as Meta<typeof Testimonials>

export const TestimonialsView = () => <Testimonials />

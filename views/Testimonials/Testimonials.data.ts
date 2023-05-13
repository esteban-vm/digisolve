import type { PropsWithImage } from '@/types'
import type { TestimonialProps } from './Testimonial'

const text = 'Voluptates hic pariatur reiciendis minus vel labore dolorum.'
const width = 72
const height = 72

const testimonials: PropsWithImage<TestimonialProps>[] = [
  {
    id: 'c2f0fc36-aad3-4e98-9ff8-61a30257d41c',
    customer: 'Herman Gibson',
    text,
    image: { src: '/img/client-1.jpg', width, height },
  },
  {
    id: 'efc0be82-fe34-4df9-8821-cf195a75da1d',
    customer: 'Peter Kemmer',
    text,
    image: { src: '/img/client-2.jpg', width, height },
  },
  {
    id: 'c679bf1c-1387-4aa0-9eec-ab2d28d79310',
    customer: 'Naomi Stoltenberg',
    text,
    image: { src: '/img/client-3.jpg', width, height },
  },
]

export default testimonials

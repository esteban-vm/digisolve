import type { TestimonialProps } from './Testimonial'
import { faker } from '@faker-js/faker'
import { uuid } from '@/helpers'

const content = faker.lorem.sentence(8)
const width = 72
const height = 72

const testimonials: TestimonialProps[] = [
  {
    id: uuid(),
    customer: faker.name.fullName({ sex: 'male' }),
    content,
    image: { src: '/img/client-1.jpg', width, height },
  },
  {
    id: uuid(),
    customer: faker.name.fullName({ sex: 'male' }),
    content,
    image: { src: '/img/client-2.jpg', width, height },
  },
  {
    id: uuid(),
    customer: faker.name.fullName({ sex: 'female' }),
    content,
    image: { src: '/img/client-3.jpg', width, height },
  },
]

export default testimonials

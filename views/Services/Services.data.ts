import type { ServiceProps } from './Service'
import { faker } from '@faker-js/faker'
import { uuid } from '@/helpers'

const description = faker.lorem.sentence(6)

const services: ServiceProps[] = [
  {
    id: uuid(),
    title: 'branding',
    icon: 'tags',
    description,
  },
  {
    id: uuid(),
    title: 'content',
    icon: 'pen-alt',
    description,
  },
  {
    id: uuid(),
    title: 'marketing',
    icon: 'funnel-dollar',
    description,
  },
  {
    id: uuid(),
    title: 'web design',
    icon: 'laptop-code',
    description,
  },
]

export default services

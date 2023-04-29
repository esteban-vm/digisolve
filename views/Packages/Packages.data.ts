import type { PackageProps } from './Package'
import { faker } from '@faker-js/faker'
import { uuid } from '@/helpers'

const description = faker.lorem.sentence(9)

const packages: PackageProps[] = [
  {
    id: uuid(),
    title: 'starter',
    price: 699,
    duration: 3,
    description,
    features: [
      'SEO, SMO and PPC',
      '2 Blogs per month',
      'Facebook & Twitter Marketing',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
  {
    id: uuid(),
    title: 'corporate',
    price: 2999,
    duration: 6,
    description,
    features: [
      'SEO, SMO and PPC',
      '4 Blogs per month',
      'All Social Media Channels',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
  {
    id: uuid(),
    title: 'enterprice',
    price: 4999,
    duration: 6,
    description,
    features: [
      'Personalized Marketing',
      '8 Blogs per month',
      'All Social Media Channels',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
]

export default packages

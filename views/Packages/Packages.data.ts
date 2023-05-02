import type { PackageProps } from './Package'

const description = 'Ratione similique aut incidunt repellendus excepturi ut commodi laboriosam.'

const packages: PackageProps[] = [
  {
    id: 'd7e645e0-e825-11ed-b24d-893619994521',
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
    id: 'df095c40-e825-11ed-b24d-893619994521',
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
    id: 'e21563c0-e825-11ed-b24d-893619994521',
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

import type { WorkProps } from './Work'
import { uuid } from '@/helpers'

const width = 394
const height = 470

const works: WorkProps[] = [
  {
    id: uuid(),
    text: 'Online advertising',
    image: { src: '/img/online-advertising.png', width, height },
  },
  {
    id: uuid(),
    text: 'Social media campaigns',
    image: { src: '/img/social-media-campaigns.png', width, height },
  },
  {
    id: uuid(),
    text: 'UX design',
    image: { src: '/img/ux-design.png', width, height },
  },
  {
    id: uuid(),
    text: 'Branding & digital marketing',
    image: { src: '/img/branding-digital-marketing.png', width, height },
  },
]

export default works

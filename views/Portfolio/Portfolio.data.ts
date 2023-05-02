import type { WorkProps } from './Work'

const width = 394
const height = 470

const works: WorkProps[] = [
  {
    id: '0a6dd16e-0229-4898-a3b4-b6b8a2dd5e5a',
    text: 'Online advertising',
    image: { src: '/img/online-advertising.png', width, height },
  },
  {
    id: '35501350-65b2-47bc-95a8-97bc27d2e186',
    text: 'Social media campaigns',
    image: { src: '/img/social-media-campaigns.png', width, height },
  },
  {
    id: '26c86632-8302-4ba4-b316-0a810712efef',
    text: 'UX design',
    image: { src: '/img/ux-design.png', width, height },
  },
  {
    id: 'e333c170-6d2a-43e9-9720-0a1d50d9c3ba',
    text: 'Branding & digital marketing',
    image: { src: '/img/branding-digital-marketing.png', width, height },
  },
]

export default works

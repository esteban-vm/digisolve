import type { PartnerProps } from './Partner'
import { uuid } from '@/helpers'

const text = 'Partner'
const width = 500
const height = 500

const partners: PartnerProps[] = [
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-1.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-2.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-3.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-4.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-5.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-6.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-7.png', width, height },
  },
  {
    id: uuid(),
    text,
    image: { src: '/img/brand-logo-8.png', width, height },
  },
]

export default partners

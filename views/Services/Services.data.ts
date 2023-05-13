import type { PropsWithIcon } from '@/types'
import type { ServiceProps } from './Service'

const text = 'Ipsam reiciendis eligendi est qui itaque.'

const services: PropsWithIcon<ServiceProps>[] = [
  {
    id: '99a36a03-7210-44c9-b031-f0e2acec54e5',
    title: 'branding',
    icon: 'tags',
    text,
  },
  {
    id: '82879f1c-49d5-4b10-b419-043556c4aa3b',
    title: 'content',
    icon: 'pen-clip',
    text,
  },
  {
    id: '7ec3da85-2944-4097-b198-f1fc7a0863a7',
    title: 'marketing',
    icon: 'filter-circle-dollar',
    text,
  },
  {
    id: 'fba92296-7d8b-4150-b10d-2f1a90041c65',
    title: 'web design',
    icon: 'code',
    text,
  },
]

export default services

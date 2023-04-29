import type { NavLinkProps } from './NavLink'
import { uuid } from '@/helpers'

const links: NavLinkProps[] = [
  {
    id: uuid(),
    text: 'Home',
    link: '#',
  },
  {
    id: uuid(),
    text: 'Contact',
    link: 'contact',
  },
  {
    id: uuid(),
    text: 'About',
    link: 'about',
  },
]

export default links

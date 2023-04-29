import type { NavLinkProps } from './NavLink'
import type { SocialLinkProps } from './SocialLink'
import { uuid } from '@/helpers'

export const navLinks: NavLinkProps[] = [
  {
    id: uuid(),
    text: 'About us',
  },
  {
    id: uuid(),
    text: 'Blog',
  },
  {
    id: uuid(),
    text: 'Help & Support',
  },
  {
    id: uuid(),
    text: 'iOS App',
  },
  {
    id: uuid(),
    text: 'Android App',
  },
]

export const socialLinks: SocialLinkProps[] = [
  { id: uuid(), text: 'Facebook', icon: ['fab', 'facebook-f'] },
  { id: uuid(), text: 'Twitter', icon: ['fab', 'twitter'] },
  { id: uuid(), text: 'Google+', icon: ['fab', 'google-plus-g'] },
  { id: uuid(), text: 'Instagram', icon: ['fab', 'instagram'] },
  { id: uuid(), text: 'YouTube', icon: ['fab', 'youtube'] },
]

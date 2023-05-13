import type { ComponentWithLink } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

const NavLinkComponent: ComponentWithLink = ({ text, link = '#', ...rest }) => {
  return (
    <li {...rest}>
      <Link href={link}>{text}</Link>
    </li>
  )
}

const NavLink = styled(NavLinkComponent)`
  margin-right: 20px;

  a:hover {
    opacity: 0.8;
  }
`

export default NavLink

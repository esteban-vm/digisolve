import type { ComponentWithLink } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

type NavLinkProps = {
  text: string
}

const NavLinkComponent: ComponentWithLink<NavLinkProps> = ({ text, url = '#', ...rest }) => {
  return (
    <li {...rest}>
      <Link href={url}>{text}</Link>
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

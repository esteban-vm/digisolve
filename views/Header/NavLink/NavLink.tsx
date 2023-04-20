import type { TextComponent } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

const NavLinkComponent: TextComponent = ({ text, ...rest }) => {
  return (
    <li {...rest}>
      <Link href='#'>{text}</Link>
    </li>
  )
}

const NavLink = styled(NavLinkComponent)`
  display: inline-block;
  margin-right: 40px;

  a {
    :link,
    :visited {
      text-decoration: none;
      text-transform: uppercase;
      color: var(--color-white);
      outline: none;
      transition: border-bottom 100ms;
    }

    :hover,
    :active {
      border-bottom: 2px solid var(--color-primary);
    }
  }
`

export default NavLink

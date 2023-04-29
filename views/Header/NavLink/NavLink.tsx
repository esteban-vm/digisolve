import type { Component, PropsWithLink } from '@/types'
import { Link } from 'react-scroll'
import { styled } from '@/styles'

export type NavLinkProps = PropsWithLink<{ text: string }>

const NavLinkComponent: Component<NavLinkProps> = ({ text, link = '', ...rest }) => {
  return (
    <li {...rest}>
      <Link to={link} href={`#${link}`} offset={-250} delay={500} smooth>
        {text}
      </Link>
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

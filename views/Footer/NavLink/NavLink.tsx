import type { TextComponent } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

const NavLinkComponent: TextComponent = ({ text, ...rest }) => {
  return (
    <li {...rest}>
      <Link href='#' target='_blank'>
        {text}
      </Link>
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

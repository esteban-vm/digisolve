import type { BasicComponent } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

export const navLinks = ['About us', 'Blog', 'Help & Support', 'iOS App', 'Android App']

const NavLinksComponent: BasicComponent = (props) => {
  return (
    <ul {...props}>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href='#' target='_blank'>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const NavLinks = styled(NavLinksComponent)`
  float: left;

  li {
    margin-right: 20px;

    a {
      :hover {
        opacity: 0.8;
      }
    }
  }
`

export default NavLinks

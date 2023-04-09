import type { Component } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

export const navLinks = ['About us', 'Blog', 'Help & Support', 'iOS App', 'Android App']

const NavLinksComponent: Component = (props) => {
  return (
    <ul {...props}>
      {navLinks.map((text, index) => (
        <li key={index} className='footer__nav--item'>
          <Link href='#' target='_blank' className='footer__nav--link'>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const NavLinks = styled(NavLinksComponent)`
  float: left;

  .footer__nav {
    &--item {
      margin-right: 20px;
    }

    &--link {
      :hover {
        opacity: 0.8;
      }
    }
  }
`

export default NavLinks

import type { Component } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '@/images'
import { styled } from '@/styles'

export const navLinks = ['Home', 'Contact', 'About']

const NavbarComponent: Component = (props) => {
  return (
    <nav {...props}>
      <Image src={logo} alt='Digisolve logo' className='navbar__image' />
      <ul className='navbar__list'>
        {navLinks.map((link, index) => (
          <li key={index} className='navbar__item'>
            <Link href='#' className='navbar__link'>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Navbar = styled(NavbarComponent)`
  .navbar {
    &__image {
      height: 120px;
      width: auto;
      float: left;
    }

    &__list {
      list-style: none;
      float: right;
      margin-top: 70px;
    }

    &__item {
      display: inline-block;
      margin-right: 40px;
    }

    &__link {
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
  }
`

export default Navbar

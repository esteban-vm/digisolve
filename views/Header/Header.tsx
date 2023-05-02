import type { Component } from '@/types'
import Image from 'next/image'
import { useId } from 'react'
import { Waypoint } from 'react-waypoint'
import { useRef } from 'react'
import { Button } from '@/components'
import { styled, mediaQuery } from '@/styles'
import links from './Header.data'
import NavLink from './NavLink'

const HeaderComponent: Component = (props) => {
  const nameID = useId()
  const navbarRef = useRef<HTMLElement>(null)

  const stickNavbar = (action: 'add' | 'remove') => {
    return () => {
      navbarRef.current?.classList[action]('animate__backInDown', 'sticky')
    }
  }

  return (
    <Waypoint onEnter={stickNavbar('remove')} onLeave={stickNavbar('add')} topOffset='200px'>
      <header id='home' aria-labelledby={nameID} {...props}>
        <nav ref={navbarRef} className='animate__animated animate__fast'>
          <Image src='/img/digisolve-logo.png' alt='Digisolve logo' width={216} height={216} />
          <ul>
            {links.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </ul>
        </nav>
        <div className='box'>
          <div className='titles'>
            <h1 id={nameID}>Digital agency</h1>
            <h2>The one stop for all your digital solutions</h2>
          </div>
          <Button text='Get a quote today!' link='contact' full />
        </div>
      </header>
    </Waypoint>
  )
}

const Header = styled(HeaderComponent)`
  background-image: linear-gradient(var(--color-overlay1), var(--color-overlay2)), url('/img/header-img.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  color: var(--color-white);
  text-transform: capitalize;

  h1 {
    font-size: 500%;
    font-weight: 400;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 200%;
    font-weight: 400;
  }

  img {
    height: 8.5rem;
    width: auto;
    float: left;
  }

  ul {
    float: right;
    margin-top: 4.3rem;
  }

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .titles {
    margin-bottom: 100px;

    ${mediaQuery('sm')} {
      margin-bottom: 50px;
    }
  }
`

export default Header

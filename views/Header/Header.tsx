import type { Component } from '@/types'
import Image from 'next/image'
import { useId } from 'react'
import { Button } from '@/components'
import { uuid } from '@/helpers'
import { styled, mediaQuery } from '@/styles'
import links from './links.json'
import NavLink from './NavLink'

const HeaderComponent: Component = (props) => {
  const id = useId()

  return (
    <header aria-labelledby={id} {...props}>
      <nav>
        <Image src='/img/digisolve-logo.png' alt='Digisolve logo' width={216} height={216} />
        <ul>
          {links.map((link) => (
            <NavLink key={uuid()} {...link} />
          ))}
        </ul>
      </nav>
      <div className='box'>
        <div className='titles'>
          <h1 id={id}>Digital agency</h1>
          <h2>The one stop for all your digital solutions</h2>
        </div>
        <Button text='Get a quote today!' isFull />
      </div>
    </header>
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
    height: 120px;
    width: auto;
    float: left;
  }

  ul {
    float: right;
    margin-top: 70px;
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

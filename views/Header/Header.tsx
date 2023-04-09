import type { Component } from '@/types'
import { Button } from '@/components'
import { styled } from '@/styles'
import Navbar from './Navbar'

const HeaderComponent: Component = (props) => {
  return (
    <header {...props}>
      <Navbar />
      <div className='header__box'>
        <div className='header__titles'>
          <h1 className='header__heading'>Digital agency</h1>
          <h2 className='header__subheading'>The one stop for all your digital solutions</h2>
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

  .header {
    &__box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    &__titles {
      margin-bottom: 100px;
    }

    &__heading {
      font-size: 500%;
      font-weight: 400;
      margin-bottom: 20px;
    }

    &__subheading {
      font-size: 200%;
      font-weight: 400;
    }
  }
`

export default Header

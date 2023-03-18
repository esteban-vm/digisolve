import type { FunctionalComponent } from '@/types'
import { Button, Navigation } from '@/components'
import { styled } from '@/utils/styles'

const HeaderComponent: FunctionalComponent = (props) => {
  return (
    <header {...props}>
      <Navigation />
      <div>
        <div>
          <h1>Digital Agency</h1>
          <h2>The one stop for all your digital solutions</h2>
        </div>
        <Button isFull>Get a Quote Today!</Button>
      </div>
    </header>
  )
}

const Header = styled(HeaderComponent)`
  background-image: linear-gradient(var(--color-dark), var(--color-darker)), url('/img/header-img.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
  color: var(--color-white);

  h1 {
    font-size: 500%;
    font-weight: 400;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 200%;
    font-weight: 400;
  }

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    div {
      margin-bottom: 100px;
    }
  }
`

export default Header

import type { AppComponent } from '@/types'
import { Button, Navigation } from '@/components'
import { styled } from '@/styles'

const Header: AppComponent = (props) => {
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

const StyledHeader = styled(Header)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('/img/header-img.jpg');
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

  & > div {
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

export default StyledHeader

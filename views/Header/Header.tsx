import type { FC } from 'react'
import { Button, Navigation } from '@/components'
import * as Styled from './Header.styled'

const Header: FC = () => {
  return (
    <Styled.Wrapper>
      <Navigation />
      <Styled.Box>
        <Styled.Text>
          <h1>Digital Agency</h1>
          <h2>The one stop for all your digital solutions</h2>
        </Styled.Text>
        <Button href='javascript:void(0)' isFull>
          Get a Quote Today!
        </Button>
      </Styled.Box>
    </Styled.Wrapper>
  )
}

export default Header

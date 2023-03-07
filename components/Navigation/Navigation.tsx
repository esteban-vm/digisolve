import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/digisolve-logo.png'
import * as Styled from './Navigation.styled'

const Navigation: FC = () => {
  return (
    <Styled.Wrapper>
      <Image src={logo} alt='Digisolve logo' />
      <Styled.Menu>
        <li>
          <Link href='#'>Home</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
        <li>
          <Link href='#'>About</Link>
        </li>
      </Styled.Menu>
    </Styled.Wrapper>
  )
}

export default Navigation

import type { AppComponent } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '@/images'
import { styled } from '@/styles'

const Navigation: AppComponent = (props) => {
  return (
    <nav {...props}>
      <Image src={logo} alt='Digisolve logo' />
      <ul>
        <li>
          <Link href='#'>Home</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
        <li>
          <Link href='#'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

const StyledNavigation = styled(Navigation)`
  img {
    height: 120px;
    width: auto;
    float: left;
  }

  ul {
    list-style: none;
    float: right;
    margin-top: 70px;

    li {
      display: inline-block;
      margin-right: 40px;

      a {
        &:link,
        &:visited {
          text-decoration: none;
          text-transform: uppercase;
          color: var(--color-white);
          outline: none;
          transition: border-bottom 100ms;
        }

        &:hover,
        &:active {
          border-bottom: 2px solid var(--color-magenta);
        }
      }
    }
  }
`

export default StyledNavigation

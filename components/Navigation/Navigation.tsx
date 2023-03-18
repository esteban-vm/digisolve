import type { FunctionalComponent } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '@/utils/images'
import { styled } from '@/utils/styles'

const NavigationComponent: FunctionalComponent = (props) => {
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

const Navigation = styled(NavigationComponent)`
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
  }
`

export default Navigation

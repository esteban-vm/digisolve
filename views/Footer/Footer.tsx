import type { ViewComponent } from '@/types'
import { styled } from '@/styles'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

const FooterComponent: ViewComponent = (props) => {
  return (
    <footer {...props}>
      <div className='row'>
        <div className='col span_1_of_2'>
          <NavLinks />
        </div>
        <div className='col span_1_of_2'>
          <SocialLinks />
        </div>
      </div>
      <div className='row'>
        <p>This webpage has been created for educational purposes.</p>
        <p>You are feel free to use it and customize it to make your own webpages.</p>
      </div>
    </footer>
  )
}

const Footer = styled(FooterComponent)`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);

  p {
    text-align: center;
    line-height: 1.5;

    :first-of-type {
      margin-top: 50px;
    }
  }

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        transition: all 500ms;

        :link,
        :visited {
          color: var(--color-dark);
          text-decoration: none;
        }
      }
    }
  }
`

export default Footer

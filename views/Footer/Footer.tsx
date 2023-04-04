import type { ViewComponent } from '@/types'
import Link from 'next/link'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@/styles'

export const navLinks = ['About us', 'Blog', 'Help & Support', 'iOS App', 'Android App']
export const socialLinks = [faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube] as IconProp[]

const FooterComponent: ViewComponent = (props) => {
  return (
    <footer {...props}>
      <div className='row'>
        <div className='col span_1_of_2'>
          <ul className='nav_links'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href='#' target='_blank'>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='col span_1_of_2'>
          <ul className='social_links'>
            {socialLinks.map((icon, index) => (
              <li key={index}>
                <Link href='#' target='_blank'>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              </li>
            ))}
          </ul>
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

  .nav_links {
    float: left;

    li {
      margin-right: 20px;

      a {
        :hover {
          opacity: 0.8;
        }
      }
    }
  }

  .social_links {
    float: right;

    li {
      margin-left: 20px;

      :hover {
        :first-of-type {
          a {
            color: var(--color-facebook);
          }
        }

        :nth-of-type(2) {
          a {
            color: var(--color-twitter);
          }
        }

        :nth-of-type(3) {
          a {
            color: var(--color-google-plus);
          }
        }

        :nth-of-type(4) {
          a {
            color: var(--color-instagram);
          }
        }

        :last-of-type {
          a {
            color: var(--color-youtube);
          }
        }
      }
    }
  }
`

export default Footer

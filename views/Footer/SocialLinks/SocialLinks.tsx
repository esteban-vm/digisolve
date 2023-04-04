import type { BasicComponent } from '@/types'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@/styles'

export const socialLinks = [faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube] as IconProp[]

const SocialLinksComponent: BasicComponent = (props) => {
  return (
    <ul {...props}>
      {socialLinks.map((icon, index) => (
        <li key={index}>
          <Link href='#' target='_blank'>
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

const SocialLinks = styled(SocialLinksComponent)`
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
`

export default SocialLinks

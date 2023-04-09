import type { Component } from '@/types'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@/styles'

export const socialLinks = [faFacebookF, faTwitter, faGooglePlusG, faInstagram, faYoutube] as IconProp[]

const SocialLinksComponent: Component = (props) => {
  return (
    <ul {...props}>
      {socialLinks.map((icon, index) => (
        <li key={index} className='footer__social--item'>
          <Link href='#' target='_blank' className='footer__social--link'>
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

const SocialLinks = styled(SocialLinksComponent)`
  float: right;

  .footer__social {
    &--item {
      margin-left: 20px;
    }

    &--link {
      :hover {
        .fa-facebook-f {
          color: var(--color-facebook);
        }

        .fa-twitter {
          color: var(--color-twitter);
        }

        .fa-google-plus-g {
          color: var(--color-google-plus);
        }

        .fa-instagram {
          color: var(--color-instagram);
        }

        .fa-youtube {
          color: var(--color-youtube);
        }
      }
    }
  }
`

export default SocialLinks

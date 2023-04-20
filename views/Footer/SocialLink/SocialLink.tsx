import type { IconComponent } from '@/types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@/styles'

const SocialLinkComponent: IconComponent = ({ icon, title, ...rest }) => {
  return (
    <li {...rest}>
      <Link href='#' target='_blank'>
        <FontAwesomeIcon icon={icon} title={title} />
      </Link>
    </li>
  )
}

const SocialLink = styled(SocialLinkComponent)`
  margin-left: 20px;

  a:hover {
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
`

export default SocialLink

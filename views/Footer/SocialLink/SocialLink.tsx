import type { ComponentWithIcon, IconProp } from '@/types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@/styles'

type SocialLinkProps = {
  text: string
}

const SocialLinkComponent: ComponentWithIcon<SocialLinkProps> = ({ text, url = '#', icon, ...rest }) => {
  return (
    <li {...rest}>
      <Link href={url} target='_blank' rel='noopener noreferrer' title={text}>
        <FontAwesomeIcon size='lg' icon={icon as IconProp} />
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

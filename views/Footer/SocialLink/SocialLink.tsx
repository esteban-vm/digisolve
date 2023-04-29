import type { Component, PropsWithIcon } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { styled } from '@/styles'

export type SocialLinkProps = PropsWithIcon<{ text: string }>

const SocialLinkComponent: Component<SocialLinkProps> = ({ text, link = '#', icon, ...rest }) => {
  return (
    <li {...rest}>
      <Link href={link} target='_blank' rel='noopener noreferrer' title={text}>
        <FontAwesomeIcon size='lg' icon={icon} />
      </Link>
    </li>
  )
}

const SocialLink = styled(SocialLinkComponent)`
  margin-left: 20px;

  a:hover {
    .fa {
      &-facebook-f {
        color: var(--color-facebook);
      }

      &-twitter {
        color: var(--color-twitter);
      }

      &-google-plus-g {
        color: var(--color-google-plus);
      }

      &-instagram {
        color: var(--color-instagram);
      }

      &-youtube {
        color: var(--color-youtube);
      }
    }
  }
`

export default SocialLink

import type { Component, PropsWithLink } from '@/types'
import Link from 'next/link'
import { Icon, type IconName } from '@/components'
import { styled } from '@/styles'

export type SocialLinkProps = PropsWithLink<{ text: string; icon: IconName }>

const SocialLinkComponent: Component<SocialLinkProps> = ({ text, link = '#', icon, ...rest }) => {
  return (
    <li {...rest}>
      <Link href={link} target='_blank' rel='noopener noreferrer' title={text}>
        <Icon name={icon} size={1.5} className='icon' />
      </Link>
    </li>
  )
}

const SocialLink = styled(SocialLinkComponent)`
  margin-left: 20px;

  .icon {
    color: inherit;
  }
`

export default SocialLink

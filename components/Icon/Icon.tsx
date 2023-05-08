import type { Component, KebabCase } from '@/types'
import { getIconName } from '@/helpers'
import * as Icons from './Icons'

type OriginalIconName = keyof typeof Icons
export type IconName = KebabCase<OriginalIconName>
type IconProps = { name: IconName; size?: number }

const Icon: Component<IconProps> = ({ name, size = 1, ...rest }) => {
  const iconName = getIconName<IconName>(name) as OriginalIconName
  const NamedIcon = Icons[iconName]

  return (
    <NamedIcon
      width={`${size}rem`}
      height={`${size}rem`}
      color='var(--color-primary)'
      role='img'
      fill='currentColor'
      aria-hidden
      {...rest}
    />
  )
}

export default Icon

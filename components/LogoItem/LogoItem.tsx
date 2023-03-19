import type { FunctionalComponent } from '@/types'
import Image, { type StaticImageData } from 'next/image'
import { styled } from '@/utils/styles'

/** Properties for logo item */
export type LogoProps = {
  /** The logo image */
  logo: StaticImageData
  /** The alt text */
  alt: string
}

const LogoItemComponent: FunctionalComponent<LogoProps> = ({ logo, alt, ...rest }) => {
  return (
    <div {...rest}>
      <Image src={logo} alt={alt} />
    </div>
  )
}

const LogoItem = styled(LogoItemComponent)`
  img {
    width: 65%;
    height: auto;
  }
`

LogoItem.defaultProps = {
  className: 'col span_1_of_4',
}

export default LogoItem

import type { FunctionalComponent } from '@/types'
import Image, { type StaticImageData } from 'next/image'
import { styled } from '@/utils/styles'

/** Properties for partner logo component */
export type LogoProps = {
  /** The logo itself */
  logo: StaticImageData
  /** The accessible text */
  alt: string
}

const PartnerLogoComponent: FunctionalComponent<LogoProps> = ({ logo, alt, ...rest }) => {
  return (
    <div {...rest}>
      <Image src={logo} alt={alt} />
    </div>
  )
}

const PartnerLogo = styled(PartnerLogoComponent)`
  img {
    width: 65%;
    height: auto;
  }
`

PartnerLogo.defaultProps = {
  className: 'col span_1_of_4',
}

export default PartnerLogo

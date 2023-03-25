import type { ImageComponent } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const PartnerLogoComponent: ImageComponent = ({ src, alt, ...rest }) => {
  return (
    <article {...rest}>
      <Image src={src} alt={alt} />
    </article>
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

import type { ImageComponent } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const PartnerComponent: ImageComponent = ({ src, alt, ...rest }) => {
  return (
    <article {...rest}>
      <Image src={src} alt={alt} className='partner__image' />
    </article>
  )
}

const Partner = styled(PartnerComponent)`
  .partner__image {
    width: 65%;
    height: auto;
    user-select: none;
  }
`

export default Partner

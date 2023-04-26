import type { ComponentWithImage } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

type PartnerProps = {
  desc: string
}

const PartnerComponent: ComponentWithImage<PartnerProps> = ({ desc, image, ...rest }) => {
  return (
    <article aria-labelledby='partner_image' {...rest}>
      <Image alt={desc} id='partner_image' {...image} />
    </article>
  )
}

const Partner = styled(PartnerComponent)`
  img {
    width: 65%;
    height: auto;
  }
`

export default Partner

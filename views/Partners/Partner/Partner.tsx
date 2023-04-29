import type { Component, PropsWithImage } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

export type PartnerProps = PropsWithImage<{ text: string }>

const PartnerComponent: Component<PartnerProps> = ({ id, text, image, ...rest }) => {
  return (
    <article aria-labelledby={id} {...rest}>
      <Image alt={text} id={id} {...image} />
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

import type { ComponentWithImage } from '@/types'
import { useId } from 'react'
import Image from 'next/image'
import { styled } from '@/styles'

type PartnerProps = {
  desc: string
}

const PartnerComponent: ComponentWithImage<PartnerProps> = ({ desc, image, ...rest }) => {
  const id = useId()

  return (
    <article aria-labelledby={id} {...rest}>
      <Image alt={desc} id={id} {...image} />
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

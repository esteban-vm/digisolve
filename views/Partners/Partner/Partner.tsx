import type { ImageComponent } from '@/types'
import { useId } from 'react'
import Image from 'next/image'
import { styled } from '@/styles'

const PartnerComponent: ImageComponent = ({ image, text, className, ...rest }) => {
  const id = useId()

  return (
    <article aria-labelledby={id} className={className}>
      <Image src={image} alt={text} id={id} {...rest} />
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

import type { ImageComponent } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const WorkBoxComponent: ImageComponent = ({ src, alt, ...rest }) => {
  return (
    <figure {...rest}>
      <Image src={src} alt={alt} />
      <p>{alt}</p>
    </figure>
  )
}

const WorkBox = styled(WorkBoxComponent)`
  background-color: var(--color-black);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    opacity: 0.7;
    transform: scale(1.15);
    transition: transform 500ms, opacity 500ms;

    :hover {
      transform: scale(1);
      opacity: 1;
    }
  }

  p {
    color: var(--color-white);
    text-transform: capitalize;
  }
`

export default WorkBox

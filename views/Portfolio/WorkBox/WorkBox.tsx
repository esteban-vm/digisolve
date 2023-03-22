import type { FunctionalComponent } from '@/types'
import Image, { type StaticImageData } from 'next/image'
import { styled } from '@/styles'

/** Properties for work box component */
export type WorkProps = {
  /** The image */
  image: StaticImageData
  /** The text */
  text: string
}

const WorkBoxComponent: FunctionalComponent<WorkProps> = ({ image, text, ...rest }) => {
  return (
    <figure {...rest}>
      <Image src={image} alt={text} />
      <p>{text}</p>
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
  }
`

export default WorkBox

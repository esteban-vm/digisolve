import type { ComponentWithImage } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const WorkComponent: ComponentWithImage = ({ id, text, image, ...rest }) => {
  return (
    <figure aria-labelledby={id} {...rest}>
      <Image alt='' id={id} {...image} />
      <p>{text}</p>
    </figure>
  )
}

const Work = styled(WorkComponent)`
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

export default Work

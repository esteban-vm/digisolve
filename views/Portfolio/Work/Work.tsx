import type { ImageComponent } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const WorkComponent: ImageComponent = ({ src, alt, ...rest }) => {
  return (
    <figure {...rest}>
      <Image src={src} alt={alt} className='work__image' />
      <p className='work__paragraph'>{alt}</p>
    </figure>
  )
}

const Work = styled(WorkComponent)`
  background-color: var(--color-black);
  overflow: hidden;

  .work {
    &__image {
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

    &__paragraph {
      color: var(--color-white);
      text-transform: capitalize;
    }
  }
`

export default Work

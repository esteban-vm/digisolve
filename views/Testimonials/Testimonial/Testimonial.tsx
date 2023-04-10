import type { ImageComponent } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const TestimonialComponent: ImageComponent = ({ src, alt, ...rest }) => {
  return (
    <article {...rest}>
      <blockquote className='testimonial__quote'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, praesentium.
      </blockquote>
      <cite className='testimonial__box'>
        <Image src={src} alt={alt} className='testimonial__photo' />
        {alt}
      </cite>
    </article>
  )
}

const Testimonial = styled(TestimonialComponent)`
  text-align: left;
  margin-bottom: 50px;
  user-select: none;

  .testimonial {
    &__quote {
      padding: 2%;
      font-style: italic;
      line-height: 145%;
      position: relative;
      margin-top: 40px;

      ::before {
        content: '\\201C';
        display: block;
        font-size: 500%;
        position: absolute;
        left: -5px;
        top: -5px;
      }

      ::first-letter {
        text-transform: capitalize;
      }
    }

    &__box {
      display: block;
      margin-top: 25px;
      font-size: 90%;
      text-transform: capitalize;
    }

    &__photo {
      border-radius: 50%;
      height: 20%;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
`

export default Testimonial

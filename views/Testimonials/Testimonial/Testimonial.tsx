import type { ImageComponent } from '@/types'
import { useId } from 'react'
import Image from 'next/image'
import { styled } from '@/styles'

const TestimonialComponent: ImageComponent = ({ image, text, className, ...rest }) => {
  const id = useId()

  return (
    <article aria-labelledby={id} className={className}>
      <blockquote>lorem ipsum dolor, sit amet consectetur adipisicing elit. At, praesentium.</blockquote>
      <cite>
        <Image src={image} alt={text} id={id} {...rest} />
        {text}
      </cite>
    </article>
  )
}

const Testimonial = styled(TestimonialComponent)`
  text-align: left;
  margin-bottom: 50px;

  blockquote {
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

  cite {
    display: block;
    margin-top: 25px;
    font-size: 90%;
    text-transform: capitalize;
  }

  img {
    border-radius: 50%;
    height: 20%;
    vertical-align: middle;
    margin-right: 10px;
  }
`

export default Testimonial

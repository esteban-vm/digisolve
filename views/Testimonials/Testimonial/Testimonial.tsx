import type { Component, PropsWithImage } from '@/types'
import Image from 'next/image'
import { styled, mediaQuery } from '@/styles'

export type TestimonialProps = PropsWithImage<{ customer: string; content: string }>

const TestimonialComponent: Component<TestimonialProps> = ({ id, customer, content, image, ...rest }) => {
  return (
    <article aria-labelledby={id} {...rest}>
      <blockquote>{content}</blockquote>
      <cite>
        <Image alt={customer} id={id} {...image} />
        {customer}
      </cite>
    </article>
  )
}

const Testimonial = styled(TestimonialComponent)`
  text-align: left;
  margin-bottom: 50px;

  ${mediaQuery('xs')} {
    margin-bottom: 5px;
  }

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

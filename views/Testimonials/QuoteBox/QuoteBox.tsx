import type { ImageComponent } from '@/types'
import Image from 'next/image'
import { styled } from '@/styles'

const QuoteBoxComponent: ImageComponent = ({ src, alt, className }) => {
  return (
    <article className={className}>
      <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, praesentium.</blockquote>
      <cite>
        <Image src={src} alt={alt} />
        {alt}
      </cite>
    </article>
  )
}

const QuoteBox = styled(QuoteBoxComponent)`
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

    img {
      border-radius: 50%;
      height: 20%;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
`

QuoteBox.defaultProps = {
  className: 'col span_1_of_3',
}

export default QuoteBox

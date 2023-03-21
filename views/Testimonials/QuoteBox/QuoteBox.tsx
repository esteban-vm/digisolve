import type { FunctionalComponent } from '@/types'
import Image, { type StaticImageData } from 'next/image'
import { styled } from '@/utils/styles'

/** Properties for quote box component */
export type QuoteProps = {
  /** The client's name */
  name: string
  /** The client's photo */
  photo: StaticImageData
}

const QuoteBoxComponent: FunctionalComponent<QuoteProps> = ({ name, photo, ...rest }) => {
  return (
    <div {...rest}>
      <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, praesentium.</blockquote>
      <cite>
        <Image src={photo} alt={name} />
        {name}
      </cite>
    </div>
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
  }

  cite {
    display: block;
    margin-top: 25px;
    font-size: 90%;

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

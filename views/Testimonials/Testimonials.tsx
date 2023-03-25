import type { View, ImageComponentProps } from '@/types'
import { client1, client2, client3 } from '@/images'
import { styled } from '@/styles'
import QuoteBox from './QuoteBox'

export const quotes: ImageComponentProps[] = [
  { src: client1, alt: 'Aaron Cruz' },
  { src: client2, alt: 'Jeff Jones' },
  { src: client3, alt: 'Helen Smith' },
]

const TestimonialsComponent: View = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2 id='testimonials_heading'>Our testimonials</h2>
      </div>
      <div className='row'>
        {quotes.map((quote, index) => (
          <QuoteBox key={index} {...quote} />
        ))}
      </div>
    </section>
  )
}

const Testimonials = styled(TestimonialsComponent)`
  background-image: linear-gradient(var(--color-overlay3), var(--color-overlay4)), url('/img/testimonial-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  color: var(--color-white);

  h2 {
    font-size: 250%;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: capitalize;
  }
`

Testimonials.defaultProps = {
  'aria-labelledby': 'testimonials_heading',
}

export default Testimonials

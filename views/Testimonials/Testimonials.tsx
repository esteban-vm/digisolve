import type { FunctionalComponent } from '@/types'
import { client1, client2, client3 } from '@/utils/images'
import { styled } from '@/utils/styles'
import QuoteBox, { type QuoteProps } from './QuoteBox'

export const quotes: QuoteProps[] = [
  { name: 'Aaron Cruz', photo: client1 },
  { name: 'Jeff Jones', photo: client2 },
  { name: 'Helen Smith', photo: client3 },
]

const TestimonialsComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2>Our Testimonials</h2>
      </div>
      <div className='row'>
        {quotes.map((quote, index) => (
          <QuoteBox key={index} {...quote} role='listitem' />
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
  }
`

export default Testimonials

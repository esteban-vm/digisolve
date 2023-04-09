import type { Component, ImageComponentProps } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { client1, client2, client3 } from '@/images'
import { styled } from '@/styles'
import Testimonial from './Testimonial'

export const testimonials: ImageComponentProps[] = [
  { src: client1, alt: 'Aaron Cruz' },
  { src: client2, alt: 'Jeff Jones' },
  { src: client3, alt: 'Helen Smith' },
]

const TestimonialsComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <h2 id={id} className='testimonials__heading'>
          Our testimonials
        </h2>
      </Grid.Row>
      <Grid.Row>
        {testimonials.map((quote, index) => (
          <Grid.Col key={index} isOneThird>
            <Testimonial {...quote} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </section>
  )
}

const Testimonials = styled(TestimonialsComponent)`
  background-image: linear-gradient(var(--color-overlay3), var(--color-overlay4)), url('/img/testimonial-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  color: var(--color-white);

  .testimonials__heading {
    font-size: 250%;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: capitalize;
  }
`

export default Testimonials

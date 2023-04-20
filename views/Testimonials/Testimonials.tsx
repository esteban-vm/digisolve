import type { Component } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import testimonials from './testimonials.json'
import Testimonial from './Testimonial'

const TestimonialsComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <h2 id={id}>Our testimonials</h2>
      </Grid.Row>
      <Grid.Row>
        {testimonials.map((testimonial) => (
          <Grid.Col key={crypto.randomUUID()} isOneThird>
            <Testimonial {...testimonial} />
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

  h2 {
    font-size: 250%;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: capitalize;

    ${mediaQuery('lg')} {
      margin-top: 90px;
    }

    ${mediaQuery('sm')} {
      margin-top: 60px;
      margin-bottom: 10px;
    }
  }
`

export default Testimonials

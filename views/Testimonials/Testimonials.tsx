import type { Component } from '@/types'
import { Grid } from '@/components'
import { uuid } from '@/helpers'
import { styled, mediaQuery } from '@/styles'
import testimonials from './testimonials.json'
import Testimonial from './Testimonial'

const TestimonialsComponent: Component = (props) => {
  return (
    <section id='testimonials' aria-labelledby='testimonials_title' {...props}>
      <Grid.Row>
        <h2 id='testimonials_title'>Our testimonials</h2>
      </Grid.Row>
      <Grid.Row>
        {testimonials.map((testimonial) => (
          <Grid.Col key={uuid()} isOneThird>
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

  ${mediaQuery('xs')} {
    padding: 0 10%;
  }

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

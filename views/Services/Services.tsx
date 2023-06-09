import type { Component } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import services from './Services.data'
import Service from './Service'

const ServicesComponent: Component = (props) => {
  const nameID = useId()

  return (
    <section id='services' aria-labelledby={nameID} {...props}>
      <Grid.Row>
        <h2 id={nameID} className='section__heading'>
          Our services
        </h2>
        <h3 className='section__subheading'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.
        </h3>
      </Grid.Row>
      <Grid.Row>
        {services.map((service) => (
          <Grid.Col key={service.id} className='xs_half' isOneQuarter>
            <Service {...service} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </section>
  )
}

const Services = styled(ServicesComponent)`
  text-align: center;
  background-color: var(--color-light);

  .xs_half {
    ${mediaQuery('xs')} {
      :first-of-type,
      :nth-of-type(2) {
        margin-bottom: 20px;
      }
    }
  }
`

export default Services

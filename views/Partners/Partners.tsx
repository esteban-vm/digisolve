import type { Component } from '@/types'
import { Grid } from '@/components'
import { uuid } from '@/helpers'
import { styled } from '@/styles'
import partners from './partners.json'
import Partner from './Partner'

const PartnersComponent: Component = (props) => {
  return (
    <section id='partners' aria-labelledby='partners_title' {...props}>
      <Grid.Row>
        <h2 id='partners_title' className='section__heading'>
          Featured clients
        </h2>
        <h3 className='section__subheading'>
          We&apos;ve worked with some of the best companies in the world. Here are some of our Amazing Partners
        </h3>
      </Grid.Row>
      <Grid.Row>
        {partners.slice(0, 4).map((partner) => (
          <Grid.Col key={uuid()} className='xs_half' isOneQuarter>
            <Partner {...partner} />
          </Grid.Col>
        ))}
      </Grid.Row>
      <Grid.Row>
        {partners.slice(4).map((partner) => (
          <Grid.Col key={uuid()} className='xs_half' isOneQuarter>
            <Partner {...partner} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </section>
  )
}

const Partners = styled(PartnersComponent)`
  text-align: center;
`

export default Partners

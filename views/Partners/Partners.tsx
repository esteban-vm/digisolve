import type { Component, ImageComponentProps } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { brandLogos } from '@/images'
import { styled } from '@/styles'
import Partner from './Partner'

export const partners = brandLogos.map((logo, index) => ({
  src: logo,
  alt: `Brand partner ${index + 1}`,
})) as ImageComponentProps[]

const PartnersComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <h2 id={id} className='section__heading'>
          Featured clients
        </h2>
        <h3 className='section__subheading'>
          We&apos;ve worked with some of the best companies in the world. Here are some of our Amazing Partners
        </h3>
      </Grid.Row>

      <Grid.Row>
        {partners.slice(0, 4).map((partner, index) => (
          <Grid.Col key={index} isOneQuarter>
            <Partner {...partner} />
          </Grid.Col>
        ))}
      </Grid.Row>

      <Grid.Row>
        {partners.slice(4).map((partner, index) => (
          <Grid.Col key={index} isOneQuarter>
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

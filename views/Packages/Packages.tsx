import type { Component, PackageComponentProps } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled } from '@/styles'
import Package from './Package'

export const packages: PackageComponentProps[] = [
  {
    heading: 'starter',
    price: 699,
    duration: 3,
    benefits: [
      'SEO, SMO and PPC',
      '2 Blogs per month',
      'Facebook & Twitter Marketing',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
  {
    heading: 'corporate',
    price: 2999,
    duration: 6,
    benefits: [
      'SEO, SMO and PPC',
      '4 Blogs per month',
      'All Social Media Channels',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
  {
    heading: 'enterprice',
    price: 4999,
    duration: 6,
    benefits: [
      'Personalized Marketing',
      '8 Blogs per month',
      'All Social Media Channels',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
]

const PackagesComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <h2 id={id} className='packages__heading'>
          Check out our most popular packages
        </h2>
      </Grid.Row>

      <Grid.Row>
        {packages.map((pack, index) => (
          <Grid.Col key={index} isOneThird>
            <Package {...pack} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </section>
  )
}

const Packages = styled(PackagesComponent)`
  text-align: center;
  background-color: var(--color-light);

  .packages__heading {
    color: var(--color-black);
    font-size: 250%;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: capitalize;
  }
`

export default Packages

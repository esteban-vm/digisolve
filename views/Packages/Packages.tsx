import type { Component } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import packages from './Packages.data'
import Package from './Package'

const PackagesComponent: Component = (props) => {
  const nameID = useId()

  return (
    <section id='packages' aria-labelledby={nameID} {...props}>
      <Grid.Row>
        <h2 id={nameID}>Check out our most popular packages</h2>
      </Grid.Row>
      <Grid.Row>
        {packages.map((_package) => (
          <Grid.Col key={_package.id} isOneThird>
            <Package {..._package} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </section>
  )
}

const Packages = styled(PackagesComponent)`
  text-align: center;
  background-color: var(--color-light);

  h2 {
    color: var(--color-black);
    font-size: 250%;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: capitalize;

    ${mediaQuery('lg')} {
      margin-top: 90px;
    }

    ${mediaQuery('sm')} {
      margin-top: 60px;
    }
  }
`

export default Packages

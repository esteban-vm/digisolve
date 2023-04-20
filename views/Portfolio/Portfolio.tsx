import type { Component } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled } from '@/styles'
import works from './works.json'
import Work from './Work'

const PortfolioComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <h2 id={id} className='section__heading'>
          Our Work
        </h2>
        <h3 className='section__subheading'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.
        </h3>
      </Grid.Row>
      <ul className='clear_fix'>
        {works.map((work) => (
          <li key={crypto.randomUUID()}>
            <Work {...work} />
          </li>
        ))}
      </ul>
    </section>
  )
}

const Portfolio = styled(PortfolioComponent)`
  text-align: center;
  background: var(--color-light);

  ul {
    margin-top: 10px;
    width: 100%;

    li {
      display: block;
      width: 25%;
      float: left;
    }
  }
`

export default Portfolio

import type { Component } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import works from './Portfolio.data'
import Work from './Work'

const PortfolioComponent: Component = (props) => {
  const nameID = useId()

  return (
    <section id='portfolio' aria-labelledby={nameID} {...props}>
      <Grid.Row>
        <h2 id={nameID} className='section__heading'>
          Our Work
        </h2>
        <h3 className='section__subheading'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.
        </h3>
      </Grid.Row>
      <ul className='clear_fix'>
        {works.map((work) => (
          <li key={work.id}>
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

      ${mediaQuery('xs')} {
        width: 50%;
      }
    }
  }
`

export default Portfolio

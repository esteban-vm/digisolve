import type { Component, ImageComponentProps } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { advertising, campaigns, design, marketing } from '@/images'
import { styled } from '@/styles'
import Work from './Work'

export const works: ImageComponentProps[] = [
  { src: advertising, alt: 'Online advertising' },
  { src: campaigns, alt: 'Social media campaigns' },
  { src: design, alt: 'UX design' },
  { src: marketing, alt: 'Branding & digital marketing' },
]

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
      <ul className='clear_fix portfolio__work--list'>
        {works.map((work, index) => (
          <li key={index} className='portfolio__work--item'>
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

  .portfolio {
    &__work {
      &--list {
        margin-top: 10px;
        list-style: none;
        width: 100%;
      }

      &--item {
        display: block;
        width: 25%;
        float: left;
      }
    }
  }
`

export default Portfolio

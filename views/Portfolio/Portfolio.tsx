import type { ViewComponent, ImageComponentProps } from '@/types'
import { Heading } from '@/components'
import { advertising, campaigns, design, marketing } from '@/images'
import { styled } from '@/styles'
import WorkBox from './WorkBox'

export const works: ImageComponentProps[] = [
  { src: advertising, alt: 'Online advertising' },
  { src: campaigns, alt: 'Social media campaigns' },
  { src: design, alt: 'UX design' },
  { src: marketing, alt: 'Branding & digital marketing' },
]

const PortfolioComponent: ViewComponent = (props) => {
  return (
    <section {...props}>
      <Heading heading='Our Work' id='portfolio_heading' />
      <ul className='clear_fix'>
        {works.map((work, index) => (
          <li key={index}>
            <WorkBox {...work} />
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
    list-style: none;
    width: 100%;

    li {
      display: block;
      width: 25%;
      float: left;
    }
  }
`

Portfolio.defaultProps = {
  'aria-labelledby': 'portfolio_heading',
}

export default Portfolio

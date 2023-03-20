import type { FunctionalComponent } from '@/types'
import { Heading } from '@/components'
import { advertising, campaigns, design, marketing } from '@/utils/images'
import { styled } from '@/utils/styles'
import WorkBox, { type WorkProps } from './WorkBox'

export const works: WorkProps[] = [
  { image: advertising, text: 'Online Advertising' },
  { image: campaigns, text: 'Social Media Campaigns' },
  { image: design, text: 'UX Design' },
  { image: marketing, text: 'Branding & Digital Marketing' },
]

const PortfolioComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <Heading heading='Our Work' />
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

export default Portfolio

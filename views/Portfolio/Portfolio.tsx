import type { FunctionalComponent } from '@/types'
import { WorkItem, type WorkProps } from '@/components'
import { advertising, campaigns, design, marketing } from '@/utils/images'
import { styled } from '@/utils/styles'

export const works: WorkProps[] = [
  { image: advertising, text: 'Online Advertising' },
  { image: campaigns, text: 'Social Media Campaigns' },
  { image: design, text: 'UX Design' },
  { image: marketing, text: 'Branding & Digital Marketing' },
]

const PortfolioComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2 className='section_heading'>Our Work</h2>
        <h3 className='section_subheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.</h3>
      </div>
      <ul className='clear_fix'>
        {works.map((work, index) => (
          <li key={index}>
            <WorkItem {...work} />
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

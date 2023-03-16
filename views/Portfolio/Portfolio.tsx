import type { AppComponent } from '@/types'
import { Work, type WorkProps } from '@/components'
import { advertising, campaigns, design, marketing } from '@/utils/images'
import { styled } from '@/utils/styles'

export const works: WorkProps[] = [
  { image: advertising, text: 'Online advertising' },
  { image: campaigns, text: 'Social media campaigns' },
  { image: design, text: 'UX design' },
  { image: marketing, text: 'Branding & Digital Marketing' },
]

const Portfolio: AppComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2>Our Work</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.</h3>
      </div>
      <ul>
        {works.map((work, index) => (
          <li key={index}>
            <Work {...work} />
          </li>
        ))}
      </ul>
    </section>
  )
}

const StyledPortfolio = styled(Portfolio)`
  text-align: center;
  background: var(--color-light-grey);

  h2 {
    font-size: 250%;
    color: var(--color-black);
    margin-bottom: 20px;
    margin-top: 150px;
  }

  h3 {
    font-size: 150%;
    color: var(--color-grey);
    font-weight: 300;
    margin-bottom: 30px;

    &::after {
      content: ' ';
      display: block;
      height: 2px;
      width: 100px;
      background-color: var(--color-magenta);
      margin: 30px auto 0;
    }
  }

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

export default StyledPortfolio

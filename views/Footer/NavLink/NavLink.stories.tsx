import type { Meta } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import { navLinks } from '../Footer.data'
import NavLink from './NavLink'

const Wrapper = styled.div`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);

  ul {
    float: left;

    li {
      display: inline-block;

      a {
        transition: all 500ms;

        :link,
        :visited {
          color: var(--color-dark);
          text-decoration: none;
        }
      }
    }
  }
`

export default {
  component: NavLink,
  title: 'Views/Footer/Nav Links',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Grid.Row>
            <Grid.Col isHalf>
              <Story {...context} />
            </Grid.Col>
          </Grid.Row>
        </Wrapper>
      )
    },
  ],
  parameters: {
    viewport: {
      disable: true,
    },
  },
} as Meta<typeof NavLink>

export const Example = () => {
  return (
    <ul>
      {navLinks.map((link) => (
        <NavLink key={link.id} {...link} />
      ))}
    </ul>
  )
}

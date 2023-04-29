import type { Meta } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import { socialLinks } from '../Footer.data'
import SocialLink from './SocialLink'

const Wrapper = styled.div`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);
  list-style: none;

  ul {
    float: right;

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
  component: SocialLink,
  title: 'Views/Footer/Social Links',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Grid.Row>
            <Grid.Col isHalf />
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
} as Meta<typeof SocialLink>

export const Example = () => {
  return (
    <ul>
      {socialLinks.map((link) => (
        <SocialLink key={link.id} {...link} />
      ))}
    </ul>
  )
}

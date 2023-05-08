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

      :first-of-type {
        a:hover {
          color: var(--color-facebook);
        }
      }

      :nth-of-type(2) {
        a:hover {
          color: var(--color-twitter);
        }
      }

      :nth-of-type(3) {
        a:hover {
          color: var(--color-tiktok);
        }
      }

      :nth-of-type(4) {
        a:hover {
          color: var(--color-instagram);
        }
      }

      :last-of-type {
        a:hover {
          color: var(--color-youtube);
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

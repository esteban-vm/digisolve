import type { Meta } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import SocialLinks from './SocialLinks'

const Wrapper = styled.div`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);
  list-style: none;

  .footer__social {
    &--item {
      display: inline-block;
    }

    &--link {
      transition: all 500ms;

      :link,
      :visited {
        color: var(--color-dark);
        text-decoration: none;
      }
    }
  }
`

export default {
  component: SocialLinks,
  title: 'Views/Footer/Social Links',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Grid.Row>
            <Grid.Col isHalf>&nbsp;</Grid.Col>
            <Grid.Col isHalf>
              <Story {...context} />
            </Grid.Col>
          </Grid.Row>
        </Wrapper>
      )
    },
  ],
} as Meta<typeof SocialLinks>

export const Example = () => <SocialLinks />

import type { Meta } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import NavLinks from './NavLinks'

const Wrapper = styled.div`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);
  list-style: none;

  .footer__nav {
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
  component: NavLinks,
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
} as Meta<typeof NavLinks>

export const Example = () => <NavLinks />

import type { Meta } from '@storybook/react'
import { styled } from '@/styles'
import NavLinks from './NavLinks'

const Wrapper = styled.div`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);

  ul {
    list-style: none;

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
  component: NavLinks,
  title: 'Views/Footer/NavLinks',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper className='row'>
          <div className='col span_1_of_2'>
            <Story {...context} />
          </div>
        </Wrapper>
      )
    },
  ],
} as Meta<typeof NavLinks>

export const NavLinksExample = () => <NavLinks />

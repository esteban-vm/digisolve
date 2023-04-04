import type { Meta } from '@storybook/react'
import { styled } from '@/styles'
import SocialLinks from './SocialLinks'

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
  component: SocialLinks,
  title: 'Views/Footer/SocialLinks',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper className='row'>
          <div className='col span_1_of_2' />
          <div className='col span_1_of_2'>
            <Story {...context} />
          </div>
        </Wrapper>
      )
    },
  ],
} as Meta<typeof SocialLinks>

export const SocialLinksExample = () => <SocialLinks />

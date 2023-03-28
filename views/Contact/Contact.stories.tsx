import type { Meta } from '@storybook/react'
import { styled } from '@/styles'
import Contact from './Contact'

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
`

export default {
  component: Contact,
  title: 'Views/Contact',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
} as Meta<typeof Contact>

export const ContactView = () => <Contact />

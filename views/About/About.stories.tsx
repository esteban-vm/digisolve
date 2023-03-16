import type { Meta } from '@storybook/react'
import { styled } from '@/utils/styles'
import About from './About'

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
`

export default {
  component: About,
  title: 'Views/About',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
} as Meta<typeof About>

export const AboutExample = () => <About />

import type { Meta, StoryObj } from '@storybook/react'
import { styled } from '@/utils/styles'
import Heading from './Heading'

const Wrapper = styled.div`
  text-align: center;
  background-color: var(--color-light);
`

export default {
  component: Heading,
  title: 'Components/Heading',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
} as Meta<typeof Heading>

export const HeadingExample: StoryObj<typeof Heading> = { args: { heading: 'Test' } }

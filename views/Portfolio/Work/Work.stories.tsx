import type { Meta, StoryObj } from '@/stories'
import { styled } from '@/styles'
import works from '../works.json'
import Work from './Work'

const Wrapper = styled.div`
  text-align: center;
`

export default {
  argTypes: {
    src: {
      control: false,
    },
  },
  component: Work,
  title: 'Views/Portfolio/Works',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
  parameters: {
    layout: 'centered',
    viewport: {
      disable: true,
    },
  },
} as Meta<typeof Work>

const Examples: StoryObj<typeof Work>[] = []
for (const work of works) Examples.push({ args: work })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]

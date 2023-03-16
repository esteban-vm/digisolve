import type { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import { styled } from '@/utils/styles'
import { works } from '@/views'
import Work from './Work'

const Wrapper = styled.div`
  text-align: center;
  height: auto;
  width: 100%;
`

export default {
  argTypes: {
    image: {
      control: false,
    },
    onClick: {
      action: true,
      control: false,
    },
    onMouseEnter: {
      action: true,
      control: false,
    },
  },
  component: Work,
  title: 'Components/Work',
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
  },
  play() {
    const img = screen.getByRole('img')
    userEvent.click(img)
    userEvent.hover(img)
  },
} as Meta<typeof Work>

const [work1, work2, work3, work4] = works

export const WorkExample1: StoryObj<typeof Work> = { args: work1 }
export const WorkExample2: StoryObj<typeof Work> = { args: work2 }
export const WorkExample3: StoryObj<typeof Work> = { args: work3 }
export const WorkExample4: StoryObj<typeof Work> = { args: work4 }

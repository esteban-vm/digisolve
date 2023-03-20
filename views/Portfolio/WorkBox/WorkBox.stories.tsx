import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/utils/styles'
import { works } from '../Portfolio'
import WorkBox from './WorkBox'

const Wrapper = styled.div`
  text-align: center;
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
  component: WorkBox,
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
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const image = canvas.getByRole('img')
    userEvent.click(image)
    userEvent.hover(image)
  },
} as Meta<typeof WorkBox>

const [work1, work2, work3, work4] = works

export const WorkExample1: StoryObj<typeof WorkBox> = { args: work1 }
export const WorkExample2: StoryObj<typeof WorkBox> = { args: work2 }
export const WorkExample3: StoryObj<typeof WorkBox> = { args: work3 }
export const WorkExample4: StoryObj<typeof WorkBox> = { args: work4 }

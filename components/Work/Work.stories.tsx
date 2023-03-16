import type { Meta, StoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import { advertising, campaigns } from '@/utils/images'
import { styled } from '@/utils/styles'
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

export const WorkExample1: StoryObj<typeof Work> = {
  args: {
    image: advertising,
    text: 'Online advertising',
  },
}

export const WorkExample2: StoryObj<typeof Work> = {
  args: {
    image: campaigns,
    text: 'Social media campaigns',
  },
}

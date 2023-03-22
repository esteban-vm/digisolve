import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { styled } from '@/styles'
import { quotes } from '../Testimonials'
import QuoteBox from './QuoteBox'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;

  article {
    background-color: var(--color-light);
    padding: 1rem;
  }
`

export default {
  argTypes: {
    photo: {
      control: false,
    },
    onMouseEnter: {
      action: true,
      control: false,
    },
  },
  component: QuoteBox,
  title: 'Views/Testimonials/Quotes',
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
    const photo = canvas.getByRole('img')
    userEvent.hover(photo)
  },
} as Meta<typeof QuoteBox>

const [quote1, quote2, quote3] = quotes

export const QuoteExample1: StoryObj<typeof QuoteBox> = { args: quote1 }
export const QuoteExample2: StoryObj<typeof QuoteBox> = { args: quote2 }
export const QuoteExample3: StoryObj<typeof QuoteBox> = { args: quote3 }

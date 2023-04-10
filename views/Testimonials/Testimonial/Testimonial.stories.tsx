import { type Meta, type StoryObj, within, userEvent } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import { testimonials } from '../Testimonials'
import Testimonial from './Testimonial'

const Wrapper = styled.div`
  text-align: center;
  color: var(--color-white);
  width: 75vw;

  background-image: linear-gradient(var(--color-overlay3), var(--color-overlay4)), url('/img/testimonial-bg.jpg');
  background-size: cover;
  background-attachment: fixed;

  article {
    padding: 1rem 0;
  }
`

export default {
  argTypes: {
    src: {
      control: false,
    },
  },
  component: Testimonial,
  title: 'Views/Testimonials/Testimonials',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Grid.Row>
            <Grid.Col isOneThird>&nbsp;</Grid.Col>
            <Grid.Col isOneThird>
              <Story {...context} />
            </Grid.Col>
            <Grid.Col isOneThird>&nbsp;</Grid.Col>
          </Grid.Row>
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
} as Meta<typeof Testimonial>

const Examples: StoryObj<typeof Testimonial>[] = []
for (const testimonial of testimonials) Examples.push({ args: testimonial })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]

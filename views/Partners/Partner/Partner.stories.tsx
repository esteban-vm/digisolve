import { type Meta, type StoryObj, within, userEvent } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import { partners } from '../Partners'
import Partner from './Partner'

const Wrapper = styled.div`
  text-align: center;
  width: 50vw;

  article {
    background-color: var(--color-white);
  }
`

export default {
  argTypes: {
    src: {
      control: false,
    },
    alt: {
      control: false,
    },
  },
  component: Partner,
  title: 'Views/Partners/Partners',
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
    const logo = canvas.getByRole('img')
    userEvent.hover(logo)
  },
} as Meta<typeof Partner>

const Examples: StoryObj<typeof Partner>[] = []
for (const partner of partners) Examples.push({ args: partner })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]
export const Example4 = Examples[3]
export const Example5 = Examples[4]
export const Example6 = Examples[5]
export const Example7 = Examples[6]
export const Example8 = Examples[7]

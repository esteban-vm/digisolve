import type { Meta, StoryObj } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import { packages } from '../Packages'
import Package from './Package'

const Wrapper = styled.div`
  width: 75vw;
`

export default {
  argTypes: {
    benefits: {
      control: false,
    },
  },
  component: Package,
  title: 'Views/Packages/Packages',
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
} as Meta<typeof Package>

const Examples: StoryObj<typeof Package>[] = []
for (const pack of packages) Examples.push({ args: pack })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]

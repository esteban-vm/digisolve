import type { Meta, StoryObj } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import packages from '../Packages.data'
import Package from './Package'

const Wrapper = styled.div`
  width: 75vw;
`

export default {
  component: Package,
  title: 'Views/Packages/Packages',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Grid.Row>
            <Grid.Col isOneThird />
            <Grid.Col isOneThird>
              <Story {...context} />
            </Grid.Col>
            <Grid.Col isOneThird />
          </Grid.Row>
        </Wrapper>
      )
    },
  ],
  parameters: {
    layout: 'centered',
    viewport: {
      disable: true,
    },
    controls: {
      exclude: /^(id|features|text|link|theme|className)$/,
    },
  },
} as Meta<typeof Package>

const Examples: StoryObj<typeof Package>[] = []
for (const _package of packages) Examples.push({ args: _package })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]

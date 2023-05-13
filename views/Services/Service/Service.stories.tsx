import type { Meta, StoryObj } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'
import services from '../Services.data'
import Service from './Service'

const Wrapper = styled.div`
  text-align: center;
  width: 50vw;

  article {
    background-color: var(--color-light);
  }
`

export default {
  component: Service,
  title: 'Views/Services/Services',
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
      exclude: /^(id|text|link|icon|theme|className)$/,
    },
  },
} as Meta<typeof Service>

const Examples: StoryObj<typeof Service>[] = []
for (const service of services) Examples.push({ args: service })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]
export const Example4 = Examples[3]

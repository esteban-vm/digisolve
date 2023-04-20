import type { Meta, StoryObj } from '@/stories'
import type { IconComponentProps } from '@/types'
import { Grid } from '@/components'
import { styled } from '@/styles'
import services from '../services.json'
import Service from './Service'

const Wrapper = styled.div`
  text-align: center;
  width: 50vw;

  article {
    background-color: var(--color-light);
  }
`

export default {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: Service,
  title: 'Views/Services/Services',
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
    viewport: {
      disable: true,
    },
  },
} as Meta<typeof Service>

const Examples: StoryObj<typeof Service>[] = []
for (const service of services as IconComponentProps[]) Examples.push({ args: service })

export const Example1 = Examples[0]
export const Example2 = Examples[1]
export const Example3 = Examples[2]
export const Example4 = Examples[3]

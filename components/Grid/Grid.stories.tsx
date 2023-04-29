import type { Meta } from '@/stories'
import { uuid } from '@/helpers'
import { Grid } from '@/components'
import { styled } from '@/styles'

const Wrapper = styled.div`
  text-align: center;
  font-size: 200%;
  width: 75vw;
  user-select: none;
  color: var(--color-light);

  div:not(.row, .col) {
    padding: 1rem 0;
    background-color: var(--color-primary);
    border: 2px solid var(--color-secondary);
  }
`

export default {
  title: 'Components/Grid',
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
} as Meta

export const Example = () => {
  return (
    <>
      <Grid.Row>
        <Grid.Col isFull>
          <div title='is full'>1</div>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        {[...Array(2)].map(() => (
          <Grid.Col key={uuid()} isHalf>
            <div title='is half'>½</div>
          </Grid.Col>
        ))}
      </Grid.Row>

      <Grid.Row>
        {[...Array(3)].map(() => (
          <Grid.Col key={uuid()} isOneThird>
            <div title='is one third'>⅓</div>
          </Grid.Col>
        ))}
      </Grid.Row>

      <Grid.Row>
        {[...Array(4)].map(() => (
          <Grid.Col key={uuid()} isOneQuarter>
            <div title='is one quarter'>¼</div>
          </Grid.Col>
        ))}
      </Grid.Row>

      <Grid.Row>
        <Grid.Col isOneThird>
          <div title='is one third'>⅓</div>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <div title='is two thirds'>⅔</div>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col isOneQuarter>
          <div title='is one quarter'>¼</div>
        </Grid.Col>
        <Grid.Col isThreeQuarters>
          <div title='is three quarters'>¾</div>
        </Grid.Col>
      </Grid.Row>
    </>
  )
}

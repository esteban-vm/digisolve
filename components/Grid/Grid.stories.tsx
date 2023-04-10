import type { Meta } from '@/stories'
import { Grid } from '@/components'
import { styled } from '@/styles'

const Wrapper = styled.div`
  width: 75vw;
  text-align: center;
  font-size: 200%;
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
        {Array<string>(2)
          .fill('½')
          .map((item) => (
            <Grid.Col key={crypto.randomUUID()} isHalf>
              <div title='is half'>{item}</div>
            </Grid.Col>
          ))}
      </Grid.Row>

      <Grid.Row>
        {Array<string>(3)
          .fill('⅓')
          .map((item) => (
            <Grid.Col key={crypto.randomUUID()} isOneThird>
              <div title='is one third'>{item}</div>
            </Grid.Col>
          ))}
      </Grid.Row>

      <Grid.Row>
        {Array<string>(4)
          .fill('¼')
          .map((item) => (
            <Grid.Col key={crypto.randomUUID()} isOneQuarter>
              <div title='is one quarter'>{item}</div>
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

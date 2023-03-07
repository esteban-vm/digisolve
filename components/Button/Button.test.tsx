import { render, screen, userEvent } from '@/tests'
import Button from './Button'

describe('Button test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button href='#'>Test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render full button', () => {
    const { asFragment } = render(
      <Button href='#' isFull>
        Test
      </Button>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call click handler', async () => {
    const handleClick = jest.fn()

    render(
      <Button href='#' onClick={handleClick} role='button'>
        Test
      </Button>
    )

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})

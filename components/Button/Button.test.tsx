import { render, screen, userEvent, configure } from '@/tests'
import Button from './Button'

describe('Button test cases:', () => {
  beforeAll(() => {
    configure({ throwSuggestions: true })
  })

  it('should render basic button', () => {
    const { asFragment } = render(<Button>Test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render full button', () => {
    const { asFragment } = render(<Button isFull>Test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call click handler', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Test</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('should have default role and href', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href')
  })
})

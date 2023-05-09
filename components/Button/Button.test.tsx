import { render, cleanup, screen, create, userEvent, axe } from '@/tests'
import Button from './Button'

describe('🧪 BUTTON:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Button text='test' />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('the button should be rendered', () => {
      const button = screen.getByRole('button', { name: 'test' })
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
    })
  })

  describe('event tests:', () => {
    it('onClick event should be called', async () => {
      const onClick = jest.fn()
      render(<Button text='test' onClick={onClick} />)
      const button = screen.getByRole('button', { name: 'test' })
      await userEvent.click(button)
      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    describe('with basic button:', () => {
      beforeEach(() => {
        tree = create(<Button text='test' />)
      })

      it('should render with correct styles', () => {
        expect(tree).toMatchSnapshot()
      })

      it('should have correct text and background color', () => {
        const target = ':hover'
        expect(tree).toHaveStyleRule('background-color', 'var(--color-primary)', { target })
        expect(tree).toHaveStyleRule('color', 'var(--color-white)', { target })
      })
    })

    describe('with full button:', () => {
      beforeEach(() => {
        tree = create(<Button text='test' isFull />)
      })

      it('should render with correct styles', () => {
        expect(tree).toMatchSnapshot()
      })

      it('should have correct background color', () => {
        expect(tree).toHaveStyleRule('background-color', 'var(--color-dark-primary)', { target: ':hover' })
      })
    })

    describe('with submit button', () => {
      it('should render with correct styles', () => {
        tree = create(<Button text='test' isSubmit />)
        expect(tree).toMatchSnapshot()
      })
    })
  })
})

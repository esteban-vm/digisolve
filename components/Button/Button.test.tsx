import type { ReactTestRendererJSON } from 'react-test-renderer'
import { render, cleanup, screen, create, userEvent } from '@/utils/tests'
import Button from './Button'

describe('🧪 <Button/> test cases:', () => {
  describe('event tests:', () => {
    const handleEvent = jest.fn()

    afterEach(cleanup)

    it('should click correctly', async () => {
      render(<Button onClick={handleEvent}>Test</Button>)
      await userEvent.click(screen.getByRole('button'))
      expect(handleEvent).toHaveBeenCalled()
    })

    it('should hover correctly', async () => {
      render(<Button onMouseEnter={handleEvent}>Test</Button>)
      await userEvent.hover(screen.getByRole('button'))
      expect(handleEvent).toHaveBeenCalled()
    })
  })

  describe('style tests:', () => {
    let buttonTree: ReactTestRendererJSON

    describe('with basic button:', () => {
      beforeEach(() => {
        buttonTree = create(<Button />).toJSON() as ReactTestRendererJSON
      })

      it('should render with correct styles', () => {
        expect(buttonTree).toMatchSnapshot()
      })

      it('should have correct text and background color', () => {
        expect(buttonTree).toHaveStyleRule('background-color', 'var(--color-primary)', { target: ':active' })
        expect(buttonTree).toHaveStyleRule('color', 'var(--color-white)', { target: ':active' })
      })
    })

    describe('with full button:', () => {
      beforeEach(() => {
        buttonTree = create(<Button isFull />).toJSON() as ReactTestRendererJSON
      })

      it('should render with correct styles', () => {
        expect(buttonTree).toMatchSnapshot()
      })

      it('should have correct background color', () => {
        expect(buttonTree).toHaveStyleRule('background-color', 'var(--color-dark-primary)', { target: ':active' })
      })
    })
  })
})

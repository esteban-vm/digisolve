import { create } from '@/tests'
import Button from './Button'

describe('🧪 BUTTON:', () => {
  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    describe('with basic button:', () => {
      beforeEach(() => {
        tree = create(<Button />)
      })

      it('should render with correct styles', () => {
        expect(tree).toMatchSnapshot()
      })

      it('should have correct text and background color', () => {
        expect(tree).toHaveStyleRule('background-color', 'var(--color-primary)', { target: ':active' })
        expect(tree).toHaveStyleRule('color', 'var(--color-white)', { target: ':active' })
      })
    })

    describe('with full button:', () => {
      beforeEach(() => {
        tree = create(<Button isFull />)
      })

      it('should render with correct styles', () => {
        expect(tree).toMatchSnapshot()
      })

      it('should have correct background color', () => {
        expect(tree).toHaveStyleRule('background-color', 'var(--color-dark-primary)', { target: ':active' })
      })
    })
  })
})

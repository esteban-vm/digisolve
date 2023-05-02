import { create } from '@/tests'
import Button from './Button'

describe('🧪 BUTTON:', () => {
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
        tree = create(<Button text='test' full />)
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
        tree = create(<Button text='test' submit />)
        expect(tree).toMatchSnapshot()
      })
    })
  })
})

import { render, cleanup, screen, create } from '@/tests'
import { breakPoints } from '@/styles'
import Contact from './Contact'

describe('🧪 CONTACT:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^we are happy to hear from you$/i

    beforeEach(() => {
      render(<Contact />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const section = screen.getByRole('region', { name })
      expect(section).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the heading', () => {
        const heading = screen.getByRole('heading', { name, level: 2 })
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      })

      it('the form', () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
        expect(form).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Contact />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    describe('should have correct styles on:', () => {
      it('small screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '60px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.sm})`,
        })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '90px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.lg})`,
        })
      })
    })
  })
})

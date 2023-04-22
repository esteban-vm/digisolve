import { render, cleanup, screen, create } from '@/tests'
import { mediaQuery } from '@/styles'
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
      it('the title', () => {
        const title = screen.getByRole('heading', { name, level: 2 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
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
      const property = 'margin-top'
      const target = 'h2'

      it('small screen devices', () => {
        expect(tree).toHaveStyleRule(property, '60px', { target, media: mediaQuery('sm') })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule(property, '90px', { target, media: mediaQuery('lg') })
      })
    })
  })
})

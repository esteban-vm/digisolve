import { render, cleanup, screen, create } from '@/tests'
import partners from './Partners.data'
import Partners from './Partners'

describe('🧪 PARTNERS:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^featured clients$/i

    beforeEach(() => {
      render(<Partners />)
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

      it('the subtitle', () => {
        const subtitle = screen.getByRole('heading', { name: /^we've worked with/i, level: 3 })
        expect(subtitle).toBeInTheDocument()
        expect(subtitle).toBeVisible()
      })

      it('the partners', () => {
        const logoElements = screen.getAllByRole('article')
        expect(logoElements).toHaveLength(partners.length)

        for (const logo of logoElements) {
          expect(logo).toBeInTheDocument()
          expect(logo).toBeVisible()
        }
      })
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Partners />)
      expect(tree).toMatchSnapshot()
    })
  })
})

import { render, cleanup, screen, create, axe } from '@/tests'
import partners from './Partners.data'
import Partners from './Partners'

describe('🧪 PARTNERS:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Partners />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: /^featured clients$/i, level: 2 })
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

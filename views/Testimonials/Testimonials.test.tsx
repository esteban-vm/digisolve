import { render, cleanup, screen, create } from '@/tests'
import Testimonials, { quotes } from './Testimonials'

describe('🧪 TESTIMONIALS:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Testimonials />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: /^our testimonials$/i, level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the quotes', () => {
      const quoteElements = screen.getAllByRole('article')
      expect(quoteElements).toHaveLength(quotes.length)

      for (const quote of quoteElements) {
        expect(quote).toBeInTheDocument()
        expect(quote).toBeVisible()
        expect(parent).toContainElement(quote)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Testimonials />)
      expect(tree).toMatchSnapshot()
    })
  })
})

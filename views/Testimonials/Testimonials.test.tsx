import { render, cleanup, screen, create } from '@/utils/tests'
import Testimonials, { quotes } from './Testimonials'

describe('🧪 <Testimonials /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<Testimonials />)
    })

    afterEach(cleanup)

    it('a heading', () => {
      const heading = screen.getByRole('heading', { name: /^our testimonials$/i })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
    })

    it(`${quotes.length} quote boxes`, () => {
      const numberOfQuotes = quotes.length
      const quoteElements = screen.getAllByRole('listitem')
      const quotePhotos = screen.getAllByRole('img')

      expect(quoteElements).toHaveLength(numberOfQuotes)
      expect(quotePhotos).toHaveLength(numberOfQuotes)

      for (let index = 0; index < numberOfQuotes; index++) {
        const quoteElement = quoteElements[index]
        expect(quoteElement).toBeInTheDocument()
        expect(quoteElement).toBeVisible()
        expect(quoteElement).toContainElement(quotePhotos[index])
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const testimonialsTree = create(<Testimonials />).toJSON()
      expect(testimonialsTree).toMatchSnapshot()
    })
  })
})

import { render, cleanup, screen, create } from '@/tests'
import { quotes } from '../Testimonials'
import QuoteBox from './QuoteBox'

describe('🧪 QUOTE BOX:', () => {
  const [testQuote] = quotes

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<QuoteBox {...testQuote} />)
      parent = screen.getByRole('article')
    })

    afterEach(cleanup)

    it('should display the photo', () => {
      const photo = screen.getByRole('img', { name: testQuote.name })
      expect(photo).toBeInTheDocument()
      expect(photo).toBeVisible()
      expect(parent).toContainElement(photo)
    })

    it('should display the name', () => {
      const name = screen.getByText(testQuote.name)
      expect(name).toBeInTheDocument()
      expect(name).toBeVisible()
      expect(parent).toContainElement(name)
    })

    it('should display the quote', () => {
      const quote = screen.getByText(/^lorem ipsum/i)
      expect(quote).toBeInTheDocument()
      expect(quote).toBeVisible()
      expect(parent).toContainElement(quote)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<QuoteBox {...testQuote} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

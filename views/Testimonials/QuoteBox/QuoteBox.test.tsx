import { render, cleanup, create, screen } from '@/utils/tests'
import { quotes } from '../Testimonials'
import QuoteBox from './QuoteBox'

describe('🧪 <QuoteBox /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<QuoteBox {...quotes[0]} />)
    })

    afterEach(cleanup)

    it('a photo', () => {
      const photo = screen.getByRole('img')
      expect(photo).toBeInTheDocument()
      expect(photo).toBeVisible()
      expect(photo).toHaveAccessibleName(quotes[0].name)
    })

    it('a name', () => {
      const name = screen.getByText(quotes[0].name)
      expect(name).toBeInTheDocument()
      expect(name).toBeVisible()
    })

    it('a quote', () => {
      const quoteElement = screen.getByText('Lorem ipsum dolor', { exact: false })
      expect(quoteElement).toBeInTheDocument()
      expect(quoteElement).toBeVisible()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const quoteTree = create(<QuoteBox {...quotes[0]} />).toJSON()
      expect(quoteTree).toMatchSnapshot()
    })
  })
})

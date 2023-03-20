import { render, cleanup, screen, create } from '@/utils/tests'
import Header from './Header'

describe('🧪 <Header /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<Header />)
    })

    afterEach(cleanup)

    it('3 navigation links', () => {
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(3)

      for (const link of links) {
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
      }
    })

    it('a heading', () => {
      const heading = screen.getByRole('heading', { name: /^digital agency$/i })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
    })

    it('a subheading', () => {
      const subheading = screen.getByRole('heading', { name: /^the one stop for all your digital solutions$/i })
      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
    })

    it('a button', () => {
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(button).toHaveTextContent(/^get a quote today\!$/i)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const headerTree = create(<Header />).toJSON()
      expect(headerTree).toMatchSnapshot()
    })
  })
})

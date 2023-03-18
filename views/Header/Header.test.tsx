import { render, cleanup, screen, create } from '@/utils/tests'
import Header from './Header'

describe('🧪 <Header /> test cases:', () => {
  describe('should display:', () => {
    beforeEach(() => {
      render(<Header />)
    })

    afterEach(cleanup)

    it('the navigation links', () => {
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(3)

      for (const link of links) {
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
      }
    })

    it('the headings', () => {
      const headings = screen.getAllByRole('heading')
      const texts = [/^digital agency$/i, /^the one stop for all your digital solutions$/i]
      expect(headings).toHaveLength(2)

      for (let index = 0; index < headings.length; index++) {
        const heading = headings[index]
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
        expect(heading).toHaveTextContent(texts[index])
      }
    })

    it('the button', () => {
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

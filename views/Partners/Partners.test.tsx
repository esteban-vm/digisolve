import { render, cleanup, screen, create } from '@/tests'
import Partners, { partners } from './Partners'

describe('🧪 PARTNERS:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Partners />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: /^featured clients$/i, level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the subheading', () => {
      const subheading = screen.getByRole('heading', {
        name: /^we've worked with some of the best companies in the world\. here are some of our amazing partners$/i,
        level: 3,
      })

      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
      expect(parent).toContainElement(subheading)
    })

    it('should display the partners', () => {
      const logoElements = screen.getAllByRole('article')
      expect(logoElements).toHaveLength(partners.length)

      for (const logo of logoElements) {
        expect(logo).toBeInTheDocument()
        expect(logo).toBeVisible()
        expect(parent).toContainElement(logo)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Partners />)
      expect(tree).toMatchSnapshot()
    })
  })
})

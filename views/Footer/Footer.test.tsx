import { render, cleanup, screen, create } from '@/tests'
import Footer, { navLinks, socialLinks } from './Footer'

describe('🧪 FOOTER', () => {
  describe('display tests', () => {
    it('should display all the links', () => {
      render(<Footer />)
      const parent = screen.getByRole('contentinfo')

      const links = screen.getAllByRole('link')
      const numberOfLinks = navLinks.length + socialLinks.length
      expect(links.length).toBe(numberOfLinks)

      for (let index = 0; index < numberOfLinks; index++) {
        const link = links[index]
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
        expect(parent).toContainElement(link)
      }

      cleanup()
    })
  })

  describe('style tests', () => {
    it('should render with correct styles', () => {
      const tree = create(<Footer />)
      expect(tree).toMatchSnapshot()
    })
  })
})

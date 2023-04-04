import { render, cleanup, screen, create } from '@/tests'
import NavLinks, { navLinks } from './NavLinks'

describe('🧪 NAV LINKS', () => {
  describe('display tests:', () => {
    it('should display the nav links', () => {
      render(<NavLinks />)
      const parent = screen.getByRole('list')

      const items = screen.getAllByRole('listitem')
      const links = screen.getAllByRole('link')

      expect(navLinks.length).toBe(items.length)
      expect(navLinks.length).toBe(links.length)

      for (let index = 0; index < navLinks.length; index++) {
        const item = items[index]
        const link = links[index]
        const text = navLinks[index]
        expect(link).toHaveTextContent(text)
        expect(item).toContainElement(link)
        expect(parent).toContainElement(link)
      }

      cleanup()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<NavLinks />)
      expect(tree).toMatchSnapshot()
    })
  })
})

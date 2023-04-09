import { render, cleanup, screen, create } from '@/tests'
import Navbar, { navLinks } from './Navbar'

describe('🧪 NAVBAR:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Navbar />)
      parent = screen.getByRole('navigation')
    })

    afterEach(cleanup)

    it('should display the logo', () => {
      const logo = screen.getByRole('img', { name: /^digisolve logo$/i })
      expect(logo).toBeInTheDocument()
      expect(logo).toBeVisible()
      expect(parent).toContainElement(logo)
    })

    it('should display the links', () => {
      const list = screen.getByRole('list')
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(navLinks.length)

      for (let index = 0; index < links.length; index++) {
        const link = links[index]
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
        expect(link).toHaveTextContent(navLinks[index])
        expect(list).toContainElement(link)
      }

      expect(parent).toContainElement(list)
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Navbar />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should change color when hovered', () => {
      expect(tree).toHaveStyleRule('border-bottom', '2px solid var(--color-primary)', { target: '.navbar__link:hover' })
    })
  })
})

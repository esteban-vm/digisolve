import { render, cleanup, screen, create } from '@/tests'
import Navbar from './Navbar'

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
      const links = screen.getAllByRole('link', { name: /^(home|contact|about)$/i })
      expect(links).toHaveLength(3)

      for (const link of links) {
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
        expect(parent).toContainElement(link)
      }
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
      expect(tree).toHaveStyleRule('border-bottom', '2px solid var(--color-primary)', { target: 'a:hover' })
    })
  })
})

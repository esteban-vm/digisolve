import { render, cleanup, screen, create } from '@/tests'
import Header from './Header'

describe('🧪 HEADER:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Header />)
      parent = screen.getByRole('banner')
    })

    afterEach(cleanup)

    it('should display the navbar', () => {
      const navbar = screen.getByRole('navigation')
      expect(navbar).toBeInTheDocument()
      expect(navbar).toBeVisible()
      expect(parent).toContainElement(navbar)
    })

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: /^digital agency$/i, level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the subheading', () => {
      const subheading = screen.getByRole('heading', {
        name: /^the one stop for all your digital solutions$/i,
        level: 2,
      })

      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
      expect(parent).toContainElement(subheading)
    })

    it('should display the button', () => {
      const button = screen.getByRole('button', { name: /^get a quote today\!$/i })
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(parent).toContainElement(button)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Header />)
      expect(tree).toMatchSnapshot()
    })
  })
})

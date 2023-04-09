import { render, cleanup, screen, create } from '@/tests'
import Packages, { packages } from './Packages'

describe('🧪 PACKAGES:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Packages />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', {
        name: /^check out our most popular packages$/i,
        level: 2,
      })

      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the packages', () => {
      const packageElements = screen.getAllByRole('article')
      expect(packageElements).toHaveLength(packages.length)

      for (const pack of packageElements) {
        expect(pack).toBeInTheDocument()
        expect(pack).toBeVisible()
        expect(parent).toContainElement(pack)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Packages />)
      expect(tree).toMatchSnapshot()
    })
  })
})

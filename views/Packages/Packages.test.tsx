import { render, cleanup, screen, create } from '@/tests'
import { breakPoints } from '@/styles'
import packages from './packages.json'
import Packages from './Packages'

describe('🧪 PACKAGES:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^check out our most popular packages$/i

    beforeEach(() => {
      render(<Packages />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const section = screen.getByRole('region', { name })
      expect(section).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the heading', () => {
        const heading = screen.getByRole('heading', { name, level: 2 })
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      })

      it('the packages', () => {
        const packageElements = screen.getAllByRole('article')
        expect(packageElements).toHaveLength(packages.length)

        for (const pack of packageElements) {
          expect(pack).toBeInTheDocument()
          expect(pack).toBeVisible()
        }
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Packages />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    describe('should have correct styles on:', () => {
      it('small screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '60px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.sm})`,
        })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '90px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.lg})`,
        })
      })
    })
  })
})

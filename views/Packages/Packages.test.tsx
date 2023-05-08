import { render, cleanup, screen, create, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import packages from './Packages.data'
import Packages from './Packages'

describe('🧪 PACKAGES:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Packages />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: /^check out our most popular packages$/i, level: 2 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
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
      const property = 'margin-top'
      const target = 'h2'

      it('small screen devices', () => {
        expect(tree).toHaveStyleRule(property, '60px', { target, media: mediaQuery('sm') })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule(property, '90px', { target, media: mediaQuery('lg') })
      })
    })
  })
})

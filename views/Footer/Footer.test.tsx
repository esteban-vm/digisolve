import { render, cleanup, screen, create } from '@/tests'
import links from './links.json'
import { breakPoints } from '@/styles'
import Footer from './Footer'

describe('🧪 FOOTER:', () => {
  describe('display tests:', () => {
    beforeEach(() => {
      render(<Footer />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })

    it('all links should be displayed', () => {
      const linkElements = screen.getAllByRole('link')
      const numberOfLinks = links.navLinks.length + links.socialLinks.length
      expect(linkElements.length).toBe(numberOfLinks)

      for (let index = 0; index < numberOfLinks; index++) {
        const link = linkElements[index]
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
      }
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Footer />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles on medium screen devices', () => {
      expect(tree).toHaveStyleRule('padding', '30px', {
        media: `(max-width: ${breakPoints.md})`,
      })

      expect(tree).toHaveStyleRule('line-height', '1.3', {
        target: 'p',
        media: `(max-width: ${breakPoints.md})`,
      })

      expect(tree).toHaveStyleRule('margin-top', '20px', {
        target: 'p:first-of-type',
        media: `(max-width: ${breakPoints.md})`,
      })
    })
  })
})

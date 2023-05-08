import { render, cleanup, screen, create, axe } from '@/tests'
import { navLinks, socialLinks } from './Footer.data'
import { mediaQuery } from '@/styles'
import Footer from './Footer'

describe('🧪 FOOTER:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Footer />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('all links should be rendered', () => {
      const linkElements = screen.getAllByRole('link')
      const numberOfLinks = navLinks.length + socialLinks.length
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

    describe('should have correct styles on:', () => {
      it('extra small screen devices', () => {
        const media = mediaQuery('xs')
        const target = "ul[class$='__links']"
        expect(tree).toHaveStyleRule('float', 'none', { target, media })
        expect(tree).toHaveStyleRule('text-align', 'center', { target, media })
        expect(tree).toHaveStyleRule('margin-bottom', '10px', { target, media })
      })

      it('medium screen devices', () => {
        const media = mediaQuery('md')
        expect(tree).toHaveStyleRule('padding', '30px', { media })
        expect(tree).toHaveStyleRule('line-height', '1.3', { target: 'p', media })
        expect(tree).toHaveStyleRule('margin-top', '20px', { target: 'p:first-of-type', media })
      })
    })
  })
})

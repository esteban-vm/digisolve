import { render, cleanup, screen, create, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import links from './Header.data'
import Header from './Header'

describe('🧪 HEADER:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Header />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the navbar', () => {
        const navbar = screen.getByRole('navigation')
        expect(navbar).toBeInTheDocument()
        expect(navbar).toBeVisible()
      })

      it('the title', () => {
        const title = screen.getByRole('heading', { name: /^digital agency$/i, level: 1 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
      })

      it('the subtitle', () => {
        const subtitle = screen.getByRole('heading', { name: /all your digital solutions$/i, level: 2 })
        expect(subtitle).toBeInTheDocument()
        expect(subtitle).toBeVisible()
      })

      it('the button', () => {
        const button = screen.getByRole('button', { name: /^get a quote today\!$/i })
        expect(button).toBeInTheDocument()
        expect(button).toBeVisible()
      })

      it('the links', () => {
        const linkElements = screen.getAllByRole('link')
        const numberOfLinks = links.length
        expect(linkElements.length).toBe(numberOfLinks)

        for (let index = 0; index < numberOfLinks; index++) {
          const link = linkElements[index]
          expect(link).toBeInTheDocument()
          expect(link).toBeVisible()
        }
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Header />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles on small screen devices', () => {
      expect(tree).toHaveStyleRule('margin-bottom', '50px', { target: '.titles', media: mediaQuery('sm') })
    })
  })
})

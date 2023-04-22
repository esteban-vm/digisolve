import { render, cleanup, screen, create } from '@/tests'
import { mediaQuery } from '@/styles'
import Header from './Header'

describe('🧪 HEADER:', () => {
  describe('display tests:', () => {
    /** Header title */
    const name = /^digital agency$/i

    beforeEach(() => {
      render(<Header />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const header = screen.getByRole('banner', { name })
      expect(header).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the navbar', () => {
        const navbar = screen.getByRole('navigation')
        expect(navbar).toBeInTheDocument()
        expect(navbar).toBeVisible()
      })

      it('the title', () => {
        const title = screen.getByRole('heading', { name, level: 1 })
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

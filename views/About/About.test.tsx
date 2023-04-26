import { render, cleanup, screen, create } from '@/tests'
import { mediaQuery } from '@/styles'
import About from './About'

describe('🧪 ABOUT:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^a digital agency focused on growing your online presence$/i

    beforeEach(() => {
      render(<About />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const section = screen.getByRole('region', { name })
      expect(section).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name, level: 2 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
      })

      it('the paragraphs', () => {
        const paragraphs = screen.getAllByText(/^lorem/i)
        expect(paragraphs).toHaveLength(2)

        for (const paragraph of paragraphs) {
          expect(paragraph).toBeInTheDocument()
          expect(paragraph).toBeVisible()
        }
      })

      it('the button', () => {
        const button = screen.getByRole('button', { name: /^read more$/i })
        expect(button).toBeInTheDocument()
        expect(button).toBeVisible()
      })

      it('the image', () => {
        const image = screen.getByRole('img', { name: /^digisolve app on laptop$/i })
        expect(image).toBeInTheDocument()
        expect(image).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<About />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    describe('should have correct styles on:', () => {
      it('extra small screen devices', () => {
        const media = mediaQuery('xs')
        expect(tree).toHaveStyleRule('margin', '30px auto', { target: 'img', media })
        expect(tree).toHaveStyleRule('text-align', 'center', { target: '.about_col:first-of-type', media })
        expect(tree).toHaveStyleRule('padding', '0', { target: '.about_col:first-of-type', media })
      })

      it('small screen devices', () => {
        const media = mediaQuery('sm')
        expect(tree).toHaveStyleRule('margin-bottom', '20px', { target: 'h2', media })
        expect(tree).toHaveStyleRule('margin-bottom', '30px', { target: 'p:last-of-type', media })
      })

      it('medium screen devices', () => {
        const media = mediaQuery('md')
        expect(tree).toHaveStyleRule('margin-top', '60px', { media })
        expect(tree).toHaveStyleRule('margin-bottom', '35px', { target: 'h2', media })
        expect(tree).toHaveStyleRule('padding-left', '1%', { target: '.about_col:first-of-type', media })
        expect(tree).toHaveStyleRule('margin-left', '0', { target: '.about_col:last-of-type', media })
        expect(tree).toHaveStyleRule('text-align', 'center', { target: '.about_col:last-of-type', media })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule('margin-bottom', '20px', { target: 'p:first-of-type', media: mediaQuery('lg') })
      })
    })
  })
})

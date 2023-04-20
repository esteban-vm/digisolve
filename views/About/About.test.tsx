import { render, cleanup, screen, create } from '@/tests'
import { breakPoints } from '@/styles'
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
      it('the heading', () => {
        const heading = screen.getByRole('heading', { name, level: 2 })
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
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
      it('small screen devices', () => {
        expect(tree).toHaveStyleRule('margin-bottom', '20px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.sm})`,
        })

        expect(tree).toHaveStyleRule('margin-bottom', '30px', {
          target: 'p:last-of-type',
          media: `(max-width: ${breakPoints.sm})`,
        })
      })

      it('medium screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '60px', {
          media: `(max-width: ${breakPoints.md})`,
        })

        expect(tree).toHaveStyleRule('margin-bottom', '35px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.md})`,
        })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule('margin-bottom', '20px', {
          target: 'p:first-of-type',
          media: `(max-width: ${breakPoints.lg})`,
        })
      })
    })
  })
})

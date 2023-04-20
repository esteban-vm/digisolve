import { render, cleanup, screen, create } from '@/tests'
import { breakPoints } from '@/styles'
import testimonials from './testimonials.json'
import Testimonials from './Testimonials'

describe('🧪 TESTIMONIALS:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^our testimonials$/i

    beforeEach(() => {
      render(<Testimonials />)
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

      it('the testimonials', () => {
        const testimonialElements = screen.getAllByRole('article')
        expect(testimonialElements).toHaveLength(testimonials.length)

        for (const testimonial of testimonialElements) {
          expect(testimonial).toBeInTheDocument()
          expect(testimonial).toBeVisible()
        }
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Testimonials />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    describe('should have correct styles on:', () => {
      it('small screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '90px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.lg})`,
        })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '60px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.sm})`,
        })

        expect(tree).toHaveStyleRule('margin-bottom', '10px', {
          target: 'h2',
          media: `(max-width: ${breakPoints.sm})`,
        })
      })
    })
  })
})

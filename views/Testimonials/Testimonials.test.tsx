import { render, cleanup, screen, create, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import testimonials from './Testimonials.data'
import Testimonials from './Testimonials'

describe('🧪 TESTIMONIALS:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Testimonials />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: /^our testimonials$/i, level: 2 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
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
      it('extra small screen devices', () => {
        expect(tree).toHaveStyleRule('padding', '0 10%', { media: mediaQuery('xs') })
      })

      it('small screen devices', () => {
        const media = mediaQuery('sm')
        const target = 'h2'
        expect(tree).toHaveStyleRule('margin-top', '60px', { target, media })
        expect(tree).toHaveStyleRule('margin-bottom', '10px', { target, media })
      })

      it('large screen devices', () => {
        expect(tree).toHaveStyleRule('margin-top', '90px', { target: 'h2', media: mediaQuery('lg') })
      })
    })
  })
})

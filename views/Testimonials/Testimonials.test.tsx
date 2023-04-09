import { render, cleanup, screen, create } from '@/tests'
import Testimonials, { testimonials } from './Testimonials'

describe('🧪 TESTIMONIALS:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Testimonials />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: /^our testimonials$/i, level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the testimonials', () => {
      const testimonialElements = screen.getAllByRole('article')
      expect(testimonialElements).toHaveLength(testimonials.length)

      for (const testimonial of testimonialElements) {
        expect(testimonial).toBeInTheDocument()
        expect(testimonial).toBeVisible()
        expect(parent).toContainElement(testimonial)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Testimonials />)
      expect(tree).toMatchSnapshot()
    })
  })
})

import { render, cleanup, screen, create } from '@/tests'
import testimonials from '../testimonials.json'
import Testimonial from './Testimonial'

describe('🧪 TESTIMONIAL:', () => {
  const [testTestimonial] = testimonials

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Testimonial {...testTestimonial} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const article = screen.getByRole('article', { name: testTestimonial.text })
      expect(article).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the photo', () => {
        const photo = screen.getByRole('img', { name: testTestimonial.text })
        expect(photo).toBeInTheDocument()
        expect(photo).toBeVisible()
      })

      it('the name', () => {
        const name = screen.getByText(testTestimonial.text)
        expect(name).toBeInTheDocument()
        expect(name).toBeVisible()
      })

      it('the quote', () => {
        const quote = screen.getByText(/^lorem ipsum/i)
        expect(quote).toBeInTheDocument()
        expect(quote).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Testimonial {...testTestimonial} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

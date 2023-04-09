import { render, cleanup, screen, create } from '@/tests'
import { testimonials } from '../Testimonials'
import Testimonial from './Testimonial'

describe('🧪 TESTIMONIAL:', () => {
  const [testTestimonial] = testimonials

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Testimonial {...testTestimonial} />)
      parent = screen.getByRole('article')
    })

    afterEach(cleanup)

    it('should display the photo', () => {
      const photo = screen.getByRole('img', { name: testTestimonial.alt })
      expect(photo).toBeInTheDocument()
      expect(photo).toBeVisible()
      expect(parent).toContainElement(photo)
    })

    it('should display the name', () => {
      const name = screen.getByText(testTestimonial.alt)
      expect(name).toBeInTheDocument()
      expect(name).toBeVisible()
      expect(parent).toContainElement(name)
    })

    it('should display the quote', () => {
      const quote = screen.getByText(/^lorem ipsum/i)
      expect(quote).toBeInTheDocument()
      expect(quote).toBeVisible()
      expect(parent).toContainElement(quote)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Testimonial {...testTestimonial} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

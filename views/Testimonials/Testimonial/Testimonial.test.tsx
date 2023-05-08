import { render, cleanup, screen, create, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import testimonials from '../Testimonials.data'
import Testimonial from './Testimonial'

describe('🧪 TESTIMONIAL:', () => {
  const [testTestimonial] = testimonials

  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Testimonial {...testTestimonial} />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the image', () => {
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
        expect(image).toBeVisible()
      })

      it('the customer', () => {
        const customer = screen.getByText(testTestimonial.customer)
        expect(customer).toBeInTheDocument()
        expect(customer).toBeVisible()
      })

      it('the content', () => {
        const content = screen.getByText(testTestimonial.content)
        expect(content).toBeInTheDocument()
        expect(content).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Testimonial {...testTestimonial} />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles on extra small screen devices', () => {
      expect(tree).toHaveStyleRule('margin-bottom', '5px', { media: mediaQuery('xs') })
    })
  })
})

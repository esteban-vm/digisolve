import { render, cleanup, screen, create } from '@/tests'
import { mediaQuery } from '@/styles'
import testimonials from '@/Testimonials/testimonials'
import Testimonial from './Testimonial'

describe('🧪 TESTIMONIAL:', () => {
  const [testTestimonial] = testimonials

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Testimonial {...testTestimonial} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const article = screen.getByRole('article', { name: testTestimonial.author })
      expect(article).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the image', () => {
        const image = screen.getByRole('img', { name: testTestimonial.author })
        expect(image).toBeInTheDocument()
        expect(image).toBeVisible()
      })

      it('the author', () => {
        const author = screen.getByText(testTestimonial.author)
        expect(author).toBeInTheDocument()
        expect(author).toBeVisible()
      })

      it('the content', () => {
        const content = screen.getByText(/^lorem ipsum/i)
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

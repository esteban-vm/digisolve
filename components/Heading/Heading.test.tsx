import { render, cleanup, screen, create } from '@/utils/tests'
import Heading from './Heading'

describe('🧪 <Heading /> test cases:', () => {
  const heading = <Heading heading='Test heading' />

  describe('there should be:', () => {
    beforeEach(() => {
      render(heading)
    })

    afterEach(cleanup)

    it('a heading text', () => {
      const headingElement = screen.getByRole('heading', { name: /^test heading$/i })
      expect(headingElement).toBeInTheDocument()
      expect(headingElement).toBeVisible()
    })

    it('a subheading text', () => {
      const [, subheadingElement] = screen.getAllByRole('heading')
      expect(subheadingElement).toBeInTheDocument()
      expect(subheadingElement).toBeVisible()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const headingTree = create(heading).toJSON()
      expect(headingTree).toMatchSnapshot()
    })
  })
})

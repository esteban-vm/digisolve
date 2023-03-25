import type { HeadingComponentProps } from '@/types'
import { render, cleanup, screen, create } from '@/tests'
import Heading from './Heading'

describe('🧪 HEADING:', () => {
  const testHeading: HeadingComponentProps = { heading: 'Test heading' }

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Heading {...testHeading} />)
      parent = screen.getByRole('none')
    })

    afterEach(cleanup)

    it('should display the heading text', () => {
      const heading = screen.getByRole('heading', { name: testHeading.heading, level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the subheading text', () => {
      const subheading = screen.getByRole('heading', { name: /^lorem ipsum/i, level: 3 })
      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
      expect(parent).toContainElement(subheading)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Heading {...testHeading} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

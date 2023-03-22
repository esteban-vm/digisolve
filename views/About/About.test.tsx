import { render, cleanup, screen, create } from '@/tests'
import About from './About'

describe('🧪 ABOUT:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<About />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', {
        name: /^a digital agency focused on Growing your online presence$/i,
        level: 2,
      })

      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the paragraphs', () => {
      const paragraphs = screen.getAllByText(/^lorem/i, { exact: false })
      expect(paragraphs).toHaveLength(2)

      for (const paragraph of paragraphs) {
        expect(paragraph).toBeInTheDocument()
        expect(paragraph).toBeVisible()
        expect(parent).toContainElement(paragraph)
      }
    })

    it('should display the button', () => {
      const button = screen.getByRole('button', { name: /^read more$/i })
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(parent).toContainElement(button)
    })

    it('should display the image', () => {
      const image = screen.getByRole('img', { name: /^digisolve app on laptop$/i })
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(parent).toContainElement(image)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<About />)
      expect(tree).toMatchSnapshot()
    })
  })
})

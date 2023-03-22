import { render, cleanup, screen, create } from '@/tests'
import Portfolio, { works } from './Portfolio'

describe('🧪 PORTFOLIO:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Portfolio />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: /^our work$/i, level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the subheading', () => {
      const subheading = screen.getByRole('heading', { level: 3 })
      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
      expect(parent).toContainElement(subheading)
    })

    it('should display the works', () => {
      const workElements = screen.getAllByRole('figure')
      expect(workElements).toHaveLength(works.length)

      for (const work of workElements) {
        expect(work).toBeInTheDocument()
        expect(work).toBeVisible()
        expect(parent).toContainElement(work)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Portfolio />)
      expect(tree).toMatchSnapshot()
    })
  })
})

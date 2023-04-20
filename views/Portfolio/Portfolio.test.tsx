import { render, cleanup, screen, create } from '@/tests'
import works from './works.json'
import Portfolio from './Portfolio'

describe('🧪 PORTFOLIO:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^our work$/i

    beforeEach(() => {
      render(<Portfolio />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const section = screen.getByRole('region', { name })
      expect(section).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the heading', () => {
        const heading = screen.getByRole('heading', { name, level: 2 })
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      })

      it('the subheading', () => {
        const subheading = screen.getByRole('heading', { level: 3 })
        expect(subheading).toBeInTheDocument()
        expect(subheading).toBeVisible()
      })

      it('the works', () => {
        const workElements = screen.getAllByRole('figure')
        expect(workElements).toHaveLength(works.length)

        for (const work of workElements) {
          expect(work).toBeInTheDocument()
          expect(work).toBeVisible()
        }
      })
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Portfolio />)
      expect(tree).toMatchSnapshot()
    })
  })
})

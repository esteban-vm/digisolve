import { render, cleanup, screen, create } from '@/tests'
import { mediaQuery } from '@/styles'
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
      it('the title', () => {
        const title = screen.getByRole('heading', { name, level: 2 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
      })

      it('the subtitle', () => {
        const subtitle = screen.getByRole('heading', { level: 3 })
        expect(subtitle).toBeInTheDocument()
        expect(subtitle).toBeVisible()
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
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Portfolio />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles on extra small screen devices', () => {
      expect(tree).toHaveStyleRule('width', '50%', { target: 'ul li', media: mediaQuery('xs') })
    })
  })
})

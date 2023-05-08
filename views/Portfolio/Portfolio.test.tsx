import { render, cleanup, screen, create, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import works from './Portfolio.data'
import Portfolio from './Portfolio'

describe('🧪 PORTFOLIO:', () => {
  describe('display tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Portfolio />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be displayed:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: /^our work$/i, level: 2 })
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

import { render, cleanup, screen, create, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import services from './Services.data'
import Services from './Services'

describe('🧪 SERVICES:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Services />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: /^our services$/i, level: 2 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
      })

      it('the subtitle', () => {
        const subtitle = screen.getByRole('heading', { level: 3 })
        expect(subtitle).toBeInTheDocument()
        expect(subtitle).toBeVisible()
      })

      it('the services', () => {
        const serviceElements = screen.getAllByRole('article')
        expect(serviceElements).toHaveLength(services.length)

        for (const service of serviceElements) {
          expect(service).toBeInTheDocument()
          expect(service).toBeVisible()
        }
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Services />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles on extra small screen devices', () => {
      const media = mediaQuery('xs')
      const property = 'margin-bottom'
      const value = '20px'
      expect(tree).toHaveStyleRule(property, value, { target: '.xs_half:first-of-type', media })
      expect(tree).toHaveStyleRule(property, value, { target: '.xs_half:nth-of-type(2)', media })
    })
  })
})

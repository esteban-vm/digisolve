import { render, cleanup, screen, create, axe } from '@/tests'
import services from '../Services.data'
import Service from './Service'

describe('🧪 SERVICE:', () => {
  const [testService] = services

  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Service {...testService} />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: testService.title, level: 4 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
      })

      it('the description', () => {
        const desc = screen.getByText(testService.description)
        expect(desc).toBeInTheDocument()
        expect(desc).toBeVisible()
      })

      it('the link', () => {
        const link = screen.getByRole('link', { name: /^read more$/i })
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
      })

      it('the icon', () => {
        const icon = screen.getByRole('img', { hidden: true })
        expect(icon).toBeInTheDocument()
        expect(icon).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Service {...testService} />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles when hovered', () => {
      expect(tree).toHaveStyleRule('opacity', '0.7', { target: 'a:hover' })
    })
  })
})

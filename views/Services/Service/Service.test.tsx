import { render, cleanup, screen, create } from '@/tests'
import services from '@/Services/services'
import Service from './Service'

describe('🧪 SERVICE:', () => {
  const [testService] = services

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Service {...testService} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const article = screen.getByRole('article', { name: testService.title })
      expect(article).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the icon', () => {
        const icon = screen.getByRole('img', { name: testService.title })
        expect(icon).toBeInTheDocument()
        expect(icon).toBeVisible()
      })

      it('the title', () => {
        const title = screen.getByRole('heading', { name: testService.title, level: 4 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
      })

      it('the description', () => {
        const desc = screen.getByText(/^lorem ipsum/i)
        expect(desc).toBeInTheDocument()
        expect(desc).toBeVisible()
      })

      it('the link', () => {
        const link = screen.getByRole('link', { name: /^read more$/i })
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
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

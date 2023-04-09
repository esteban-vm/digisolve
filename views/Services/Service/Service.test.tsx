import { render, cleanup, screen, create } from '@/tests'
import { services } from '../Services'
import Service from './Service'

describe('🧪 SERVICE:', () => {
  const [testService] = services

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Service {...testService} />)
      parent = screen.getByRole('article')
    })

    afterEach(cleanup)

    it('should display the icon', () => {
      const icon = screen.getByRole('img', { name: testService.title })
      expect(icon).toBeInTheDocument()
      expect(icon).toBeVisible()
      expect(parent).toContainElement(icon)
    })

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: testService.title, level: 4 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the paragraph', () => {
      const paragraph = screen.getByText(/^lorem ipsum/i)
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toBeVisible()
      expect(parent).toContainElement(paragraph)
    })

    it('should display the link', () => {
      const link = screen.getByRole('link', { name: /^read more$/i })
      expect(link).toBeInTheDocument()
      expect(link).toBeVisible()
      expect(parent).toContainElement(link)
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

    it('should decrease opacity when hovered', () => {
      expect(tree).toHaveStyleRule('opacity', '0.7', { target: '.service__link:hover' })
    })
  })
})

import { render, cleanup, screen, create } from '@/tests'
import { services } from '../Services'
import ServiceBox from './ServiceBox'

describe('🧪 SERVICE BOX:', () => {
  const [testService] = services

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<ServiceBox {...testService} />)
      parent = screen.getByRole('article')
    })

    afterEach(cleanup)

    it('should display the icon', () => {
      const icon = screen.getByRole('img', { name: testService.heading })
      expect(icon).toBeInTheDocument()
      expect(icon).toBeVisible()
      expect(parent).toContainElement(icon)
    })

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: testService.heading, level: 4 })
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
      tree = create(<ServiceBox {...testService} />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should decrease opacity when hovered', () => {
      expect(tree).toHaveStyleRule('opacity', '0.7', { target: 'a:hover' })
    })
  })
})

import { render, cleanup, screen, create } from '@/tests'
import Services, { services } from './Services'

describe('🧪 SERVICES:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Services />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: /^our services$/i, level: 2 })
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

    it('should display the services', () => {
      const serviceElements = screen.getAllByRole('article')
      expect(serviceElements).toHaveLength(services.length)

      for (const service of serviceElements) {
        expect(service).toBeInTheDocument()
        expect(service).toBeVisible()
        expect(parent).toContainElement(service)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Services />)
      expect(tree).toMatchSnapshot()
    })
  })
})

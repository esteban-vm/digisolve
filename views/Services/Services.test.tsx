import { render, cleanup, screen, create } from '@/utils/tests'
import Services, { services } from './Services'

describe('🧪 <Services /> test cases:', () => {
  describe('should display:', () => {
    beforeEach(() => {
      render(<Services />)
    })

    afterEach(cleanup)

    it('the headings', () => {
      const headings = screen.getAllByRole('heading')
      expect(headings).toHaveLength(6)

      for (const heading of headings) {
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      }
    })

    it('the services', () => {
      const serviceElements = screen.getAllByRole('article')
      const serviceIcons = screen.getAllByRole('img')

      for (let index = 0; index < services.length; index++) {
        const service = serviceElements[index]
        expect(service).toBeInTheDocument()
        expect(service).toBeVisible()
        expect(service).toContainElement(serviceIcons[index])
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const servicesTree = create(<Services />).toJSON()
      expect(servicesTree).toMatchSnapshot()
    })
  })
})

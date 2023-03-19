import { render, cleanup, screen, create } from '@/utils/tests'
import Services, { services } from './Services'

describe('🧪 <Services /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<Services />)
    })

    afterEach(cleanup)

    it('a heading', () => {
      const heading = screen.getByRole('heading', { name: /^our services$/i })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
    })

    it('a subheading', () => {
      const [, subheading] = screen.getAllByRole('heading')
      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
    })

    it(`${services.length} service items`, () => {
      const numberOfServices = services.length
      const serviceElements = screen.getAllByRole('listitem')
      const serviceIcons = screen.getAllByRole('img')

      expect(serviceElements).toHaveLength(numberOfServices)
      expect(serviceIcons).toHaveLength(numberOfServices)

      for (let index = 0; index < numberOfServices; index++) {
        const serviceElement = serviceElements[index]
        expect(serviceElement).toBeInTheDocument()
        expect(serviceElement).toBeVisible()
        expect(serviceElement).toContainElement(serviceIcons[index])
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

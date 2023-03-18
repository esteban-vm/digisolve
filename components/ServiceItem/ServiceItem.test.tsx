import { render, cleanup, create, screen } from '@/utils/tests'
import { services } from '@/views'
import ServiceItem from './ServiceItem'

describe('🧪 <ServiceItem /> test cases:', () => {
  const service = <ServiceItem {...services[0]} />

  describe('should display:', () => {
    beforeEach(() => {
      render(service)
    })

    afterEach(cleanup)

    it('the icon', () => {
      const icon = screen.getByRole('img')
      expect(icon).toBeInTheDocument()
      expect(icon).toBeVisible()
      expect(icon).toHaveAccessibleName(/^branding$/i)
    })

    it('the heading', () => {
      const heading = screen.getByRole('heading')
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
    })

    it('the text', () => {
      const text = screen.getByRole('paragraph')
      expect(text).toBeInTheDocument()
      expect(text).toBeVisible()
    })

    it('the link', () => {
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link).toBeVisible()
      expect(link).toHaveTextContent(/^read more$/i)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const serviceTree = create(service).toJSON()
      expect(serviceTree).toMatchSnapshot()
    })
  })
})

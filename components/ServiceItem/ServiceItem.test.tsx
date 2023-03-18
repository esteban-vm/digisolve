import type { ReactTestRendererJSON } from 'react-test-renderer'
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
    let serviceTree: ReactTestRendererJSON

    beforeEach(() => {
      serviceTree = create(service).toJSON() as ReactTestRendererJSON
    })

    it('should render with correct styles', () => {
      expect(serviceTree).toMatchSnapshot()
    })

    it('should decrease opacity when hovered', () => {
      expect(serviceTree).toHaveStyleRule('opacity', '0.7', { target: 'a:hover' })
    })
  })
})

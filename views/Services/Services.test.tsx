import { render, cleanup, screen, create } from '@/tests'
import services from './services.json'
import Services from './Services'

describe('🧪 SERVICES:', () => {
  describe('display tests:', () => {
    /** Section title */
    const name = /^our services$/i

    beforeEach(() => {
      render(<Services />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const section = screen.getByRole('region', { name })
      expect(section).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the heading', () => {
        const heading = screen.getByRole('heading', { name, level: 2 })
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      })

      it('the subheading', () => {
        const subheading = screen.getByRole('heading', { level: 3 })
        expect(subheading).toBeInTheDocument()
        expect(subheading).toBeVisible()
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
    it('should render with correct styles', () => {
      const tree = create(<Services />)
      expect(tree).toMatchSnapshot()
    })
  })
})

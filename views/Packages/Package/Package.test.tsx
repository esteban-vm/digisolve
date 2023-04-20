import { render, cleanup, screen, create } from '@/tests'
import { formatPrice } from '@/helpers'
import { breakPoints } from '@/styles'
import packages from '../packages.json'
import Package from './Package'

describe('🧪 PACKAGE:', () => {
  const [testPackage] = packages

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Package {...testPackage} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const article = screen.getByRole('article', { name: testPackage.heading })
      expect(article).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the heading', () => {
        const heading = screen.getByRole('heading', { name: testPackage.heading, level: 4 })
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      })

      it('the price', () => {
        const price = screen.getByText(formatPrice(testPackage.price))
        expect(price).toBeInTheDocument()
        expect(price).toBeVisible()
      })

      it('the duration', () => {
        const duration = screen.getByText(`${testPackage.duration} months`)
        expect(duration).toBeInTheDocument()
        expect(duration).toBeVisible()
      })

      it('the description', () => {
        const description = screen.getByText(/^lorem ipsum/i)
        expect(description).toBeInTheDocument()
        expect(description).toBeVisible()
      })

      it('the benefits', () => {
        const list = screen.getByRole('list')
        const benefits = screen.getAllByRole('listitem')
        const icons = screen.getAllByRole('img', { hidden: true })
        expect(icons.length).toBe(benefits.length)

        for (let index = 0; index < benefits.length; index++) {
          const benefit = benefits[index]
          expect(benefit).toBeInTheDocument()
          expect(benefit).toBeVisible()
          expect(benefit).toContainElement(icons[index])
          expect(benefit).toHaveTextContent(testPackage.benefits[index])
          expect(list).toContainElement(benefit)
        }
      })

      it('the button', () => {
        const button = screen.getByRole('button', { name: /^sign up now$/i })
        expect(button).toBeInTheDocument()
        expect(button).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Package {...testPackage} />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles on medium screen devices', () => {
      expect(tree).toHaveStyleRule('width', '100%', {
        media: `(max-width: ${breakPoints.md})`,
      })

      expect(tree).toHaveStyleRule('margin-bottom', '25px', {
        target: 'h4',
        media: `(max-width: ${breakPoints.md})`,
      })
    })
  })
})

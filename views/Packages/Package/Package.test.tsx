import { render, cleanup, screen, create } from '@/tests'
import { formatPrice } from '@/helpers'
import { packages } from '../Packages'
import Package from './Package'

describe('🧪 PACKAGE:', () => {
  const [testPackage] = packages

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Package {...testPackage} />)
      parent = screen.getByRole('article')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', { name: testPackage.heading, level: 4 })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the price', () => {
      const price = screen.getByText(formatPrice(testPackage.price))
      expect(price).toBeInTheDocument()
      expect(price).toBeVisible()
      expect(parent).toContainElement(price)
    })

    it('should display the duration', () => {
      const duration = screen.getByText(`${testPackage.duration} months`)
      expect(duration).toBeInTheDocument()
      expect(duration).toBeVisible()
      expect(parent).toContainElement(duration)
    })

    it('should display the description', () => {
      const description = screen.getByText(/^lorem ipsum/i)
      expect(description).toBeInTheDocument()
      expect(description).toBeVisible()
      expect(parent).toContainElement(description)
    })

    it('should display the benefits', () => {
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

      expect(parent).toContainElement(list)
    })

    it('should display the button', () => {
      const button = screen.getByRole('button', { name: /^sign up now$/i })
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(parent).toContainElement(button)
    })
  })

  describe('style tests', () => {
    it('should render with correct styles', () => {
      const tree = create(<Package {...testPackage} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

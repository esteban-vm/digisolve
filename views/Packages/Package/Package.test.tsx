import { render, cleanup, screen, create } from '@/tests'
import { formatPrice } from '@/helpers'
import { mediaQuery } from '@/styles'
import packages from '@/Packages/packages'
import Package from './Package'

describe('🧪 PACKAGE:', () => {
  const [testPackage] = packages

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Package {...testPackage} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const article = screen.getByRole('article', { name: testPackage.title })
      expect(article).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', { name: testPackage.title, level: 4 })
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
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

      it('the features', () => {
        const list = screen.getByRole('list')
        const features = screen.getAllByRole('listitem')
        const icons = screen.getAllByRole('img', { hidden: true })
        expect(icons.length).toBe(features.length)

        for (let index = 0; index < features.length; index++) {
          const feature = features[index]
          expect(feature).toBeInTheDocument()
          expect(feature).toBeVisible()
          expect(feature).toContainElement(icons[index])
          expect(feature).toHaveTextContent(testPackage.features[index])
          expect(list).toContainElement(feature)
        }
      })

      it('the description', () => {
        const description = screen.getByText(/^lorem ipsum/i)
        expect(description).toBeInTheDocument()
        expect(description).toBeVisible()
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

    describe('should have correct styles on:', () => {
      it('extra small screen devices', () => {
        expect(tree).toHaveStyleRule('width', '80%', { media: mediaQuery('xs') })
      })

      it('medium screen devices', () => {
        const media = mediaQuery('md')
        expect(tree).toHaveStyleRule('width', '100%', { media })
        expect(tree).toHaveStyleRule('margin-bottom', '25px', { target: 'h4', media })
      })
    })
  })
})

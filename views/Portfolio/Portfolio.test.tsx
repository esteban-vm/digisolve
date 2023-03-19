import { render, cleanup, screen, create } from '@/utils/tests'
import Portfolio, { works } from './Portfolio'

describe('🧪 <Portfolio /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<Portfolio />)
    })

    afterEach(cleanup)

    it('a heading', () => {
      const heading = screen.getByRole('heading', { name: /^our work$/i })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
    })

    it('a subheading', () => {
      const [, subheading] = screen.getAllByRole('heading')
      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
    })

    it(`${works.length} work items`, () => {
      const numberOfWorks = works.length
      const workImages = screen.getAllByRole('img')
      const workTexts = screen.getAllByRole('paragraph')

      expect(workImages).toHaveLength(numberOfWorks)
      expect(workTexts).toHaveLength(numberOfWorks)

      for (let index = 0; index < numberOfWorks; index++) {
        const workImage = workImages[index]
        const workTextElem = workTexts[index]
        const workTextStr = works[index].text

        expect(workImage).toBeInTheDocument()
        expect(workImage).toBeVisible()
        expect(workImage).toHaveAccessibleName(workTextStr)

        expect(workTextElem).toBeInTheDocument()
        expect(workTextElem).toBeVisible()
        expect(workTextElem).toHaveTextContent(workTextStr)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const portfolioTree = create(<Portfolio />).toJSON()
      expect(portfolioTree).toMatchSnapshot()
    })
  })
})

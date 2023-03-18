import { render, cleanup, screen, create } from '@/utils/tests'
import Portfolio, { works } from './Portfolio'

describe('🧪 <Portfolio /> test cases:', () => {
  describe('should display:', () => {
    beforeEach(() => {
      render(<Portfolio />)
    })

    afterEach(cleanup)

    it('the headings', () => {
      const headings = screen.getAllByRole('heading')
      expect(headings).toHaveLength(2)

      for (const heading of headings) {
        expect(heading).toBeInTheDocument()
        expect(heading).toBeVisible()
      }
    })

    it('the works', () => {
      const workQuantity = works.length

      const workImages = screen.getAllByRole('img')
      const workTexts = screen.getAllByRole('paragraph')

      expect(workImages).toHaveLength(workQuantity)
      expect(workTexts).toHaveLength(workQuantity)

      for (let index = 0; index < workQuantity; index++) {
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

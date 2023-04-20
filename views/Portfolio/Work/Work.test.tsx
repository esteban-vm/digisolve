import { render, cleanup, screen, create } from '@/tests'
import works from '../works.json'
import Work from './Work'

describe('🧪 WORK:', () => {
  const [testWork] = works

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Work {...testWork} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const figure = screen.getByRole('figure', { name: testWork.text })
      expect(figure).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the image', () => {
        const image = screen.getByRole('img', { name: testWork.text })
        expect(image).toBeInTheDocument()
        expect(image).toBeVisible()
      })

      it('the text', () => {
        const text = screen.getByText(testWork.text)
        expect(text).toBeInTheDocument()
        expect(text).toBeVisible()
      })
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Work {...testWork} />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should have correct styles when hovered', () => {
      expect(tree).toHaveStyleRule('transform', 'scale(1)', {
        target: 'img:hover',
      })

      expect(tree).toHaveStyleRule('opacity', '1', {
        target: 'img:hover',
      })
    })
  })
})

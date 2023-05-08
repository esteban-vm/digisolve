import { render, cleanup, screen, create, axe } from '@/tests'
import works from '../Portfolio.data'
import Work from './Work'

describe('🧪 WORK:', () => {
  const [testWork] = works

  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Work {...testWork} />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the image', () => {
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
        expect(image).toBeVisible()
      })

      it('the title', () => {
        const title = screen.getByText(testWork.text)
        expect(title).toBeInTheDocument()
        expect(title).toBeVisible()
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
      const target = 'img:hover'
      expect(tree).toHaveStyleRule('transform', 'scale(1)', { target })
      expect(tree).toHaveStyleRule('opacity', '1', { target })
    })
  })
})

import { render, cleanup, screen, create } from '@/tests'
import { works } from '../Portfolio'
import Work from './Work'

describe('🧪 WORK:', () => {
  const [testWork] = works

  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Work {...testWork} />)
      parent = screen.getByRole('figure')
    })

    afterEach(cleanup)

    it('should display the image', () => {
      const image = screen.getByRole('img', { name: testWork.alt })
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(parent).toContainElement(image)
    })

    it('should display the text', () => {
      const text = screen.getByText(testWork.alt)
      expect(text).toBeInTheDocument()
      expect(text).toBeVisible()
      expect(parent).toContainElement(text)
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

    it('should transform scale and increment opacity when hovered', () => {
      expect(tree).toHaveStyleRule('transform', 'scale(1)', { target: '.work__image:hover' })
      expect(tree).toHaveStyleRule('opacity', '1', { target: '.work__image:hover' })
    })
  })
})

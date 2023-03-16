import type { ReactTestRendererJSON } from 'react-test-renderer'
import { advertising } from '@/utils/images'
import { render, cleanup, create, screen } from '@/utils/tests'
import Work from './Work'

describe('🧪 <Work/> test cases:', () => {
  const work = <Work image={advertising} text='Online advertising' />

  describe('should display:', () => {
    beforeEach(() => {
      render(work)
    })

    afterEach(cleanup)

    it('the image', () => {
      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(image).toHaveAccessibleName(/^online\sadvertising$/i)
    })

    it('the text', () => {
      const text = screen.getByRole('paragraph')
      expect(text).toBeInTheDocument()
      expect(text).toBeVisible()
      expect(text).toHaveTextContent(/^online\sadvertising$/i)
    })
  })

  describe('style tests:', () => {
    let workTree: ReactTestRendererJSON

    beforeEach(() => {
      workTree = create(work).toJSON() as ReactTestRendererJSON
    })

    it('should render with correct styles', () => {
      expect(workTree).toMatchSnapshot()
    })

    it('should transform scale and increment opacity when hovered', () => {
      expect(workTree).toHaveStyleRule('transform', 'scale(1)', { target: 'img:hover' })
      expect(workTree).toHaveStyleRule('opacity', '1', { target: 'img:hover' })
    })
  })
})
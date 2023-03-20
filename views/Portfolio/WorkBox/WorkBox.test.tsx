import type { ReactTestRendererJSON } from 'react-test-renderer'
import { render, cleanup, create, screen } from '@/utils/tests'
import { works } from '../Portfolio'
import WorkBox from './WorkBox'

describe('🧪 <WorkBox /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<WorkBox {...works[0]} />)
    })

    afterEach(cleanup)

    it('an image', () => {
      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(image).toHaveAccessibleName(/^online\sadvertising$/i)
    })

    it('a text', () => {
      const text = screen.getByRole('paragraph')
      expect(text).toBeInTheDocument()
      expect(text).toBeVisible()
      expect(text).toHaveTextContent(/^online\sadvertising$/i)
    })
  })

  describe('style tests:', () => {
    let workTree: ReactTestRendererJSON

    beforeEach(() => {
      workTree = create(<WorkBox {...works[0]} />).toJSON() as ReactTestRendererJSON
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

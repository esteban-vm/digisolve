import { render, cleanup, screen, create } from '@/tests'
import { partners } from '../Partners'
import Partner from './Partner'

describe('🧪 PARTNER:', () => {
  const [testPartner] = partners

  describe('display tests:', () => {
    it('should display the partner logo', () => {
      render(<Partner {...testPartner} />)

      const parent = screen.getByRole('article')
      const image = screen.getByRole('img', { name: testPartner.alt })
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(parent).toContainElement(image)

      cleanup()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Partner {...testPartner} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

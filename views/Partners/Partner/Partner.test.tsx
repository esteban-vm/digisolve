import { render, cleanup, screen, create } from '@/tests'
import partners from '@/Partners/partners'
import Partner from './Partner'

describe('🧪 PARTNER:', () => {
  const [testPartner] = partners

  describe('display tests:', () => {
    beforeEach(() => {
      render(<Partner {...testPartner} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const article = screen.getByRole('article', { name: testPartner.desc })
      expect(article).toBeInTheDocument()
    })

    it('the logo should be displayed', () => {
      const logo = screen.getByRole('img', { name: testPartner.desc })
      expect(logo).toBeInTheDocument()
      expect(logo).toBeVisible()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Partner {...testPartner} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

import { render, cleanup, screen, create, axe } from '@/tests'
import partners from '../Partners.data'
import Partner from './Partner'

describe('🧪 PARTNER:', () => {
  const [testPartner] = partners

  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Partner {...testPartner} />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('the logo should be rendered', () => {
      const logo = screen.getByRole('img', { name: testPartner.text })
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

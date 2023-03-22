import { render, cleanup, screen, create } from '@/tests'
import { logos } from '../Partners'
import PartnerLogo from './PartnerLogo'

describe('🧪 PARTNER LOGO:', () => {
  const [testLogo] = logos

  describe('display tests:', () => {
    it('should display the logo image', () => {
      render(<PartnerLogo {...testLogo} />)

      const parent = screen.getByRole('article')
      const image = screen.getByRole('img', { name: testLogo.alt })
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(parent).toContainElement(image)

      cleanup()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<PartnerLogo {...testLogo} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

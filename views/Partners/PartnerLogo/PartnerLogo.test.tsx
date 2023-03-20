import { render, cleanup, create, screen } from '@/utils/tests'
import { logos } from '../Partners'
import PartnerLogo from './PartnerLogo'

describe('🧪 <PartnerLogo /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<PartnerLogo {...logos[0]} />)
    })

    afterEach(cleanup)

    it('a logo', () => {
      const logoImg = screen.getByRole('img')
      expect(logoImg).toBeInTheDocument()
      expect(logoImg).toBeVisible()
    })

    it('an accessible text', () => {
      const logoImg = screen.getByRole('img')
      expect(logoImg).toHaveAccessibleName(/^brand logo 1$/i)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const logoTree = create(<PartnerLogo {...logos[0]} />).toJSON()
      expect(logoTree).toMatchSnapshot()
    })
  })
})

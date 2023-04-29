import { render, cleanup, screen, create } from '@/tests'
import { socialLinks } from '../Footer.data'
import SocialLink from './SocialLink'

describe('🧪 SOCIAL LINK:', () => {
  const [testLink] = socialLinks

  describe('display tests:', () => {
    beforeEach(() => {
      render(<SocialLink {...testLink} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const listItem = screen.getByRole('listitem')
      expect(listItem).toBeInTheDocument()
    })

    it('the icon of the link should be displayed', () => {
      const link = screen.getByRole('link', { name: testLink.text })
      const icon = screen.getByRole('img', { hidden: true })
      expect(link).toBeInTheDocument()
      expect(icon).toBeInTheDocument()
      expect(icon).toBeVisible()
      expect(link).toContainElement(icon)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<SocialLink {...testLink} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

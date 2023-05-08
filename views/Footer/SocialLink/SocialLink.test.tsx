import { render, cleanup, screen, create, axe } from '@/tests'
import { socialLinks } from '../Footer.data'
import SocialLink from './SocialLink'

describe('🧪 SOCIAL LINK:', () => {
  const [testLink] = socialLinks

  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(
        <ul>
          <SocialLink {...testLink} />
        </ul>
      ))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('the icon of the link should be rendered', () => {
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

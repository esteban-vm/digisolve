import { render, cleanup, screen, create } from '@/tests'
import links from '@/Header/links'
import NavLink from './NavLink'

describe('🧪 NAV LINK:', () => {
  const [testLink] = links

  describe('display tests:', () => {
    beforeEach(() => {
      render(<NavLink {...testLink} />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const listItem = screen.getByRole('listitem')
      expect(listItem).toBeInTheDocument()
    })

    it('the text of the link should be displayed', () => {
      const link = screen.getByRole('link', { name: testLink.text })
      expect(link).toBeInTheDocument()
      expect(link).toBeVisible()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<NavLink {...testLink} />)
      expect(tree).toMatchSnapshot()
    })
  })
})

import { render, cleanup, screen, create, axe } from '@/tests'
import links from '../Header.data'
import NavLink from './NavLink'

describe('🧪 NAV LINK:', () => {
  const [testLink] = links

  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(
        <ul>
          <NavLink {...testLink} />
        </ul>
      ))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('the text of the link should be rendered', () => {
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

import type { ReactTestRendererJSON } from 'react-test-renderer'
import { render, cleanup, create, screen } from '@/utils/tests'
import Navbar from './Navbar'

describe('🧪 <Navbar /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<Navbar />)
    })

    afterEach(cleanup)

    it('a logo', () => {
      const logo = screen.getByRole('img')
      expect(logo).toBeInTheDocument()
      expect(logo).toBeVisible()
      expect(logo).toHaveAccessibleName(/^digisolve logo$/i)
    })

    it('3 links', () => {
      const links = screen.getAllByRole('link')
      const texts = [/^home$/i, /^contact$/i, /^about$/i]
      expect(links).toHaveLength(3)

      for (let index = 0; index < links.length; index++) {
        const link = links[index]
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
        expect(link).toHaveTextContent(texts[index])
      }
    })
  })

  describe('style tests:', () => {
    let navbarTree: ReactTestRendererJSON

    beforeEach(() => {
      navbarTree = create(<Navbar />).toJSON() as ReactTestRendererJSON
    })

    it('should render with correct styles', () => {
      expect(navbarTree).toMatchSnapshot()
    })

    it('should change color when hovered', () => {
      expect(navbarTree).toHaveStyleRule('border-bottom', '2px solid var(--color-primary)', { target: 'a:hover' })
    })
  })
})

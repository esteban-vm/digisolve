import type { ReactTestRendererJSON } from 'react-test-renderer'
import { render, cleanup, create, screen } from '@/utils/tests'
import Navigation from './Navigation'

describe('🧪 <Navigation/> test cases:', () => {
  describe('should display:', () => {
    beforeEach(() => {
      render(<Navigation />)
    })

    afterEach(cleanup)

    it('the logo', () => {
      const logo = screen.getByRole('img')
      expect(logo).toBeInTheDocument()
      expect(logo).toBeVisible()
      expect(logo).toHaveAccessibleName(/^digisolve logo$/i)
    })

    it('the links', () => {
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
    let navigationTree: ReactTestRendererJSON

    beforeEach(() => {
      navigationTree = create(<Navigation />).toJSON() as ReactTestRendererJSON
    })

    it('should render with correct styles', () => {
      expect(navigationTree).toMatchSnapshot()
    })

    it('should change color when hovered', () => {
      expect(navigationTree).toHaveStyleRule('border-bottom', '2px solid var(--color-primary)', { target: 'a:hover' })
    })
  })
})

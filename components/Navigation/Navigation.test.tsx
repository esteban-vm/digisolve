import { render, screen, configure } from '@/tests'
import Navigation from './Navigation'

describe('Navigation test cases:', () => {
  let asFragment: () => DocumentFragment

  beforeAll(() => {
    configure({ throwSuggestions: true })
  })

  beforeEach(() => {
    void ({ asFragment } = render(<Navigation />))
  })

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  describe('should display:', () => {
    it('the logo', () => {
      const logo = screen.getByRole('img')
      expect(logo).toBeInTheDocument()
      expect(logo).toBeVisible()
      expect(logo).toHaveAccessibleName(/^digisolve logo$/i)
    })

    it('the links', () => {
      const [link1, link2, link3] = screen.getAllByRole('link')

      expect(link1).toBeInTheDocument()
      expect(link1).toBeVisible()
      expect(link1).toHaveTextContent(/^home$/i)

      expect(link2).toBeInTheDocument()
      expect(link2).toBeVisible()
      expect(link2).toHaveTextContent(/^contact$/i)

      expect(link3).toBeInTheDocument()
      expect(link3).toBeVisible()
      expect(link3).toHaveTextContent(/^about$/i)
    })
  })
})

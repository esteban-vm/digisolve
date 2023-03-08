import { render, screen, configure } from '@/tests'
import Header from './Header'

describe('Header test cases:', () => {
  let asFragment: () => DocumentFragment

  beforeAll(() => {
    configure({ throwSuggestions: true })
  })

  beforeEach(() => {
    void ({ asFragment } = render(<Header />))
  })

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  describe('should display:', () => {
    it('the navigation links', () => {
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(3)

      for (const link of links) {
        expect(link).toBeInTheDocument()
        expect(link).toBeVisible()
      }
    })

    it('the headings', () => {
      const [heading1, heading2] = screen.getAllByRole('heading')

      expect(heading1).toBeInTheDocument()
      expect(heading1).toBeVisible()
      expect(heading1).toHaveTextContent(/^digital agency$/i)

      expect(heading2).toBeInTheDocument()
      expect(heading2).toBeVisible()
      expect(heading2).toHaveTextContent(/^the one stop for all your digital solutions$/i)
    })

    it('the button', () => {
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(button).toHaveTextContent(/^get a quote today\!$/i)
    })
  })
})

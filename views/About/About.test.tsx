import { render, screen, configure } from '@/tests'
import About from './About'

describe('About test cases:', () => {
  let asFragment: () => DocumentFragment

  beforeAll(() => {
    configure({ throwSuggestions: true })
  })

  beforeEach(() => {
    void ({ asFragment } = render(<About />))
  })

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  describe('should display:', () => {
    it('the heading', () => {
      const heading = screen.getByRole('heading')
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(heading).toHaveTextContent(/^a digital agency focused on Growing your online presence$/i)
    })

    it('the paragraphs', () => {
      const paragraphs = screen.getAllByRole('paragraph')
      expect(paragraphs).toHaveLength(2)

      for (const paragraph of paragraphs) {
        expect(paragraph).toBeInTheDocument()
        expect(paragraph).toBeVisible()
      }
    })

    it('the button', () => {
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toBeVisible()
      expect(button).toHaveTextContent(/^read more$/i)
    })

    it('the image', () => {
      const image = screen.getByRole('img')
      expect(image).toBeInTheDocument()
      expect(image).toBeVisible()
      expect(image).toHaveAccessibleName(/^digisolve app on laptop$/i)
    })
  })
})

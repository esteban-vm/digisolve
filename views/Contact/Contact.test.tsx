import { render, cleanup, screen, create } from '@/tests'
import Contact from './Contact'

describe('🧪 CONTACT:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<Contact />)
      parent = screen.getByRole('region')
    })

    afterEach(cleanup)

    it('should display the heading', () => {
      const heading = screen.getByRole('heading', {
        name: /^we are happy to hear from you$/i,
        level: 2,
      })

      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
      expect(parent).toContainElement(heading)
    })

    it('should display the form', () => {
      const form = screen.getByRole('form')
      expect(form).toBeInTheDocument()
      expect(form).toBeVisible()
      expect(parent).toContainElement(form)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Contact />)
      expect(tree).toMatchSnapshot()
    })
  })
})

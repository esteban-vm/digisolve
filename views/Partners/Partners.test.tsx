import { render, cleanup, screen, create } from '@/utils/tests'
import Partners, { logos } from './Partners'

describe('🧪 <Partners /> test cases:', () => {
  describe('there should be:', () => {
    beforeEach(() => {
      render(<Partners />)
    })

    afterEach(cleanup)

    it('a heading', () => {
      const heading = screen.getByRole('heading', { name: /^featured clients$/i })
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()
    })

    it('a subheading', () => {
      const subheading = screen.getByRole('heading', {
        name: /^we've worked with some of the best companies in the world\. here are some of our amazing partners$/i,
      })
      expect(subheading).toBeInTheDocument()
      expect(subheading).toBeVisible()
    })

    it(`${logos.length} logo boxes`, () => {
      const numberOfLogos = logos.length
      const logoElements = screen.getAllByRole('img')
      expect(logoElements).toHaveLength(numberOfLogos)

      for (let index = 0; index < numberOfLogos; index++) {
        const logoElement = logoElements[index]
        expect(logoElement).toBeInTheDocument()
        expect(logoElement).toBeVisible()
        expect(logoElement).toHaveAccessibleName(logos[index].alt)
      }
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const partnersTree = create(<Partners />).toJSON()
      expect(partnersTree).toMatchSnapshot()
    })
  })
})

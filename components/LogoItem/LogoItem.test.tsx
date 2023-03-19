import { render, cleanup, create, screen } from '@/utils/tests'
import { logos } from '@/views'
import LogoItem from './LogoItem'

describe('🧪 <LogoItem /> test cases:', () => {
  const logo = <LogoItem {...logos[0]} />

  describe('there should be:', () => {
    beforeEach(() => {
      render(logo)
    })

    afterEach(cleanup)

    it('a logo', () => {
      const logoImg = screen.getByRole('img')
      expect(logoImg).toBeInTheDocument()
      expect(logoImg).toBeVisible()
    })

    it('an accessible text', () => {
      const logoImg = screen.getByRole('img')
      expect(logoImg).toHaveAccessibleName(/^brand logo 1$/i)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const logoTree = create(logo).toJSON()
      expect(logoTree).toMatchSnapshot()
    })
  })
})

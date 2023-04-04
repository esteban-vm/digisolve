import { render, cleanup, screen, create } from '@/tests'
import SocialLinks, { socialLinks } from './SocialLinks'

describe('🧪 SOCIAL LINKS', () => {
  describe('display tests:', () => {
    it('should display the social links', () => {
      render(<SocialLinks />)
      const parent = screen.getByRole('list')

      const items = screen.getAllByRole('listitem')
      const links = screen.getAllByRole('link')
      const icons = screen.getAllByRole('img', { hidden: true })

      expect(socialLinks.length).toBe(items.length)
      expect(socialLinks.length).toBe(links.length)
      expect(socialLinks.length).toBe(icons.length)

      for (let index = 0; index < socialLinks.length; index++) {
        const item = items[index]
        const link = links[index]
        const icon = icons[index]
        expect(link).toContainElement(icon)
        expect(item).toContainElement(link)
        expect(parent).toContainElement(item)
      }

      cleanup()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<SocialLinks />)
      expect(tree).toMatchSnapshot()
    })
  })
})

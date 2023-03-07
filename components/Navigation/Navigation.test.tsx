import { render, screen } from '@/tests'
import Navigation from './Navigation'

describe('Navigation test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Navigation />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render nav links', () => {
    render(<Navigation />)

    const links = screen.getAllByRole('link')

    for (const link of links) {
      expect(link).toBeInTheDocument()
      expect(link).toBeVisible()
      expect(link).toHaveAttribute('href', '#')
    }
  })
})

import { render } from '@/tests'
import Header from './Header'

describe('Header test cases:', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })
})

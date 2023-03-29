import type { ViewComponent, PackageComponentProps } from '@/types'
import { styled } from '@/styles'
import PackageBox from './PackageBox'

export const packages: PackageComponentProps[] = [
  {
    heading: 'starter',
    price: 699,
    duration: 3,
    benefits: [
      'SEO, SMO and PPC',
      '2 Blogs per month',
      'Facebook & Twitter Marketing',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
  {
    heading: 'corporate',
    price: 2999,
    duration: 6,
    benefits: [
      'SEO, SMO and PPC',
      '4 Blogs per month',
      'All Social Media Channels',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
  {
    heading: 'enterprice',
    price: 4999,
    duration: 6,
    benefits: [
      'Personalized Marketing',
      '8 Blogs per month',
      'All Social Media Channels',
      'Monthly Performance',
      'Traffic Report',
    ],
  },
]

const PackagesComponent: ViewComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2 id='packages_heading'>check out our most popular packages</h2>
      </div>
      <div className='row'>
        {packages.map((pack, index) => (
          <PackageBox key={index} {...pack} />
        ))}
      </div>
    </section>
  )
}

const Packages = styled(PackagesComponent)`
  text-align: center;
  background-color: var(--color-light);

  h2 {
    color: var(--color-black);
    font-size: 250%;
    margin-bottom: 20px;
    margin-top: 150px;
    text-transform: capitalize;
  }
`

Packages.defaultProps = {
  'aria-labelledby': 'packages_heading',
}

export default Packages

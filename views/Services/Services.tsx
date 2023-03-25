import type { View, IconComponentProps } from '@/types'
import { faTags, faPenAlt, faFunnelDollar, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Heading } from '@/components'
import { styled } from '@/styles'
import ServiceBox from './ServiceBox'

export const services: IconComponentProps[] = [
  { title: 'branding', icon: faTags },
  { title: 'content', icon: faPenAlt },
  { title: 'marketing', icon: faFunnelDollar },
  { title: 'web design', icon: faLaptopCode },
]

const ServicesComponent: View = (props) => {
  return (
    <section {...props}>
      <Heading heading='Our services' id='services_heading' />
      <div className='row'>
        {services.map((service, index) => (
          <ServiceBox key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

const Services = styled(ServicesComponent)`
  text-align: center;
  background-color: var(--color-light);
`

Services.defaultProps = {
  'aria-labelledby': 'services_heading',
}

export default Services

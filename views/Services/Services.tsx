import type { FunctionalComponent } from '@/types'
import { ServiceItem, type ServiceProps } from '@/components'
import { faTags, faPenAlt, faFunnelDollar, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@/utils/styles'

export const services: ServiceProps[] = [
  { heading: 'Branding', icon: faTags },
  { heading: 'Content', icon: faPenAlt },
  { heading: 'Marketing', icon: faFunnelDollar },
  { heading: 'Web Design', icon: faLaptopCode },
]

const ServiceComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2 className='section_heading'>Our Services</h2>
        <h3 className='section_subheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.</h3>
      </div>
      <div className='row'>
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} role='listitem' />
        ))}
      </div>
    </section>
  )
}

const Services = styled(ServiceComponent)`
  text-align: center;
  background-color: var(--color-light);
`

export default Services

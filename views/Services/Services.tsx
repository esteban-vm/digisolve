import type { FunctionalComponent } from '@/types'
import { faTags, faPenAlt, faFunnelDollar, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Heading } from '@/components'
import { styled } from '@/utils/styles'
import ServiceBox, { type ServiceProps } from './ServiceBox'

export const services: ServiceProps[] = [
  { heading: 'Branding', icon: faTags },
  { heading: 'Content', icon: faPenAlt },
  { heading: 'Marketing', icon: faFunnelDollar },
  { heading: 'Web Design', icon: faLaptopCode },
]

const ServicesComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <Heading heading='Our Services' />
      <div className='row'>
        {services.map((service, index) => (
          <ServiceBox key={index} {...service} role='listitem' />
        ))}
      </div>
    </section>
  )
}

const Services = styled(ServicesComponent)`
  text-align: center;
  background-color: var(--color-light);
`

export default Services

import type { FunctionalComponent } from '@/types'
import { Heading } from '@/components'
import { brandLogos } from '@/utils/images'
import { styled } from '@/utils/styles'
import PartnerLogo, { type LogoProps } from './PartnerLogo'

export const logos = brandLogos.map((logo, index) => ({ logo, alt: `Brand Logo ${index + 1}` } as LogoProps))

const PartnersComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <Heading
        heading='Featured Clients'
        subheading="We've worked with some of the best companies in the world. Here are some of our Amazing Partners"
      />
      <div className='row'>
        {logos.slice(0, 4).map((logo, index) => (
          <PartnerLogo key={index} {...logo} />
        ))}
      </div>
      <div className='row'>
        {logos.slice(4).map((logo, index) => (
          <PartnerLogo key={index} {...logo} />
        ))}
      </div>
    </section>
  )
}

const Partners = styled(PartnersComponent)`
  text-align: center;
`

export default Partners

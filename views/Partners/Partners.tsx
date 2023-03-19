import type { FunctionalComponent } from '@/types'
import { LogoItem, type LogoProps } from '@/components'
import { brandLogos } from '@/utils/images'
import { styled } from '@/utils/styles'

export const logos = brandLogos.map((logo, index) => ({ logo, alt: `Brand Logo ${index + 1}` } as LogoProps))

const PartnersComponent: FunctionalComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2 className='section_heading'>Featured Clients</h2>
        <h3 className='section_subheading'>
          We&apos;ve worked with some of the best companies in the world. Here are some of our Amazing Partners
        </h3>
      </div>
      <div className='row'>
        {logos.slice(0, 4).map((logo, index) => (
          <LogoItem key={index} {...logo} />
        ))}
      </div>
      <div className='row'>
        {logos.slice(4).map((logo, index) => (
          <LogoItem key={index} {...logo} />
        ))}
      </div>
    </section>
  )
}

const Partners = styled(PartnersComponent)`
  text-align: center;
`

export default Partners

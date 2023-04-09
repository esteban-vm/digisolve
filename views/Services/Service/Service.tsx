import type { IconComponent } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { styled } from '@/styles'

const ServiceComponent: IconComponent = ({ icon, title, ...rest }) => {
  return (
    <article {...rest}>
      <FontAwesomeIcon icon={icon} title={title} className='service__icon' />
      <h4 className='service__heading'>{title}</h4>
      <p className='service__paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, debitis illum expedita nulla quae consectetur.
      </p>
      <Link href='#' className='service__link'>
        Read more
      </Link>
    </article>
  )
}

const Service = styled(ServiceComponent)`
  padding: 1% 1.5%;

  .service {
    &__icon {
      width: 3rem;
      height: 3rem;
      margin-bottom: 30px;
      color: var(--color-secondary);
    }

    &__heading {
      font-size: 150%;
      margin-bottom: 30px;
      font-weight: 400;
      text-transform: capitalize;
    }

    &__paragraph {
      color: var(--color-grey);
      font-size: 90%;
      margin-bottom: 20px;
    }

    &__link {
      color: var(--color-primary);
      text-transform: uppercase;
      text-decoration: none;
      outline: none;
      user-select: none;
      transition: opacity 200ms;

      :hover {
        opacity: 0.7;
      }
    }
  }
`

export default Service

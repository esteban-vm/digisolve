import type { FunctionalComponent } from '@/types'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { styled } from '@/styles'

/** Properties for service box component */
export type ServiceProps = {
  /** The heading (title) */
  heading: string
  /** The icon */
  icon: IconDefinition
}

const ServiceBoxComponent: FunctionalComponent<ServiceProps> = ({ heading, icon, ...rest }) => {
  return (
    <article {...rest}>
      <FontAwesomeIcon icon={icon} title={heading} />
      <h4>{heading}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, debitis illum expedita nulla quae consectetur.
      </p>
      <Link href='#'>Read more</Link>
    </article>
  )
}

const ServiceBox = styled(ServiceBoxComponent)`
  padding: 1% 1.5%;
  width: 20%;

  :first-of-type {
    margin-left: 1.6%;
  }

  @media only screen and (max-width: 480px) {
    :first-of-type {
      margin-left: 0%;
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: 30px;

    path {
      fill: var(--color-secondary);
    }
  }

  h4 {
    font-size: 150%;
    margin-bottom: 30px;
    font-weight: 400;
  }

  p {
    color: var(--color-grey);
    font-size: 90%;
    margin-bottom: 20px;
  }

  a {
    color: var(--color-primary);
    text-transform: uppercase;
    text-decoration: none;
    outline: none;
    transition: opacity 200ms;

    :hover {
      opacity: 0.7;
    }
  }
`

ServiceBox.defaultProps = {
  className: 'col span_1_of_4',
}

export default ServiceBox

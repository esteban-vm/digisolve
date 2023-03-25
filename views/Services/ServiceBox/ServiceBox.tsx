import type { IconComponent } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { styled } from '@/styles'

const ServiceBoxComponent: IconComponent = ({ icon, title, ...rest }) => {
  return (
    <article {...rest}>
      <FontAwesomeIcon icon={icon} title={title} />
      <h4>{title}</h4>
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
    text-transform: capitalize;
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

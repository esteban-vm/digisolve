import type { Component, PropsWithIcon } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { styled } from '@/styles'

export type ServiceProps = PropsWithIcon<{ title: string; description: string }>

const ServiceComponent: Component<ServiceProps> = ({ id, title, description, link = '#', icon, ...rest }) => {
  return (
    <article aria-labelledby={id} {...rest}>
      <FontAwesomeIcon icon={icon} className='icon' />
      <h4 id={id}>{title}</h4>
      <p>{description}</p>
      <Link href={link}>Read more</Link>
    </article>
  )
}

const Service = styled(ServiceComponent)`
  padding: 1% 1.5%;

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
    :link,
    :visited {
      color: var(--color-primary);
      text-transform: uppercase;
      text-decoration: none;
      outline: none;
      transition: opacity 200ms;
    }

    :hover {
      opacity: 0.7;
    }
  }

  .icon {
    width: 3rem;
    height: 3rem;
    margin-bottom: 30px;
    color: var(--color-secondary);
  }
`

export default Service

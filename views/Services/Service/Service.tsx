import type { ComponentWithIcon, IconProp } from '@/types'
import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { styled } from '@/styles'

type ServiceProps = {
  title: string
  desc?: string
}

const ServiceComponent: ComponentWithIcon<ServiceProps> = ({ title, desc, url = '#', icon, ...rest }) => {
  const id = useId()

  return (
    <article aria-labelledby={id} {...rest}>
      <FontAwesomeIcon icon={icon as IconProp} title={title} className='icon' />
      <h4 id={id}>{title}</h4>
      <p>{desc}</p>
      <Link href={url}>Read more</Link>
    </article>
  )
}

ServiceComponent.defaultProps = {
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, debitis illum expedita nulla quae consectetur.',
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
    color: var(--color-primary);
    text-transform: uppercase;
    text-decoration: none;
    outline: none;
    transition: opacity 200ms;

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

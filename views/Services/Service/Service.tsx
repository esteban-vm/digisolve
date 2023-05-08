import type { Component, PropsWithLink } from '@/types'
import { useRef } from 'react'
import { Waypoint } from 'react-waypoint'
import Link from 'next/link'
import { Icon, type IconName } from '@/components'
import { styled } from '@/styles'

export type ServiceProps = PropsWithLink<{ title: string; description: string; icon: IconName }>

const ServiceComponent: Component<ServiceProps> = ({ id, title, description, link = '#', icon, ...rest }) => {
  const serviceRef = useRef<HTMLElement>(null)

  const animateService = (action: 'add' | 'remove') => {
    return () => {
      serviceRef.current?.classList[action]('animate__zoomIn')
    }
  }

  return (
    <Waypoint onEnter={animateService('add')} onLeave={animateService('remove')}>
      <article aria-labelledby={id} ref={serviceRef} {...rest}>
        <Icon name={icon} size={3} className='icon' />
        <h4 id={id}>{title}</h4>
        <p>{description}</p>
        <Link href={link}>Read more</Link>
      </article>
    </Waypoint>
  )
}

ServiceComponent.defaultProps = {
  className: 'animate__animated animate__fast',
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
    margin-bottom: 30px;
    color: var(--color-secondary);
  }
`

export default Service

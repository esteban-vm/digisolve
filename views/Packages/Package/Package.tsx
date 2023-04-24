import type { Component } from '@/types'
import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components'
import { formatPrice, uuid } from '@/helpers'
import { styled, mediaQuery } from '@/styles'

type PackageProps = {
  title: string
  price: number
  duration: number
  features: string[]
  desc?: string
}

const PackageComponent: Component<PackageProps> = ({ title, price, duration, features, desc, ...rest }) => {
  const id = useId()
  const formattedPrice = formatPrice(price)

  return (
    <article aria-labelledby={id} {...rest}>
      <div className='section'>
        <h4 id={id}>{title}</h4>
        <p>
          {formattedPrice} <span>{duration} months</span>
        </p>
        <p>{desc}</p>
      </div>
      <div className='section'>
        <ul>
          {features.map((feature) => (
            <li key={uuid()}>
              <FontAwesomeIcon icon='check' className='icon' />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='section'>
        <Button text='Sign up now' className='btn' isFull />
      </div>
    </article>
  )
}

PackageComponent.defaultProps = {
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit nemo natus ad vero molestias?',
}

const Package = styled(PackageComponent)`
  background-color: var(--color-white);
  width: 90%;
  margin: 0 auto 30px;
  box-shadow: 0 3px 2px var(--color-shadow);
  text-align: left;

  ${mediaQuery('md')} {
    width: 100%;
  }

  ${mediaQuery('xs')} {
    width: 80%;
  }

  h4 {
    font-size: 150%;
    color: var(--color-grey);
    font-weight: 400;
    margin-bottom: 50px;
    text-transform: capitalize;

    ${mediaQuery('md')} {
      margin-bottom: 25px;
    }
  }

  p {
    :first-of-type {
      color: var(--color-primary);
      font-size: 300%;
      font-weight: 300;
      margin-bottom: 10px;

      span {
        font-size: 30%;
        font-weight: 500;
      }
    }

    :last-of-type {
      color: var(--color-grey);
      font-size: 80%;
      margin-bottom: 10px;
    }
  }

  ul {
    li {
      color: var(--color-grey);
      padding: 5px 0;
    }
  }

  .section {
    padding: 15px;
    border-bottom: 1px solid var(--color-shadow);

    :first-of-type {
      background-color: var(--color-lighter);
    }

    :last-of-type {
      border: 0;
      text-align: center;
    }
  }

  .icon {
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    margin-right: 10px;
    color: var(--color-primary);
  }

  .btn {
    margin: 15px 0;
  }
`

export default Package

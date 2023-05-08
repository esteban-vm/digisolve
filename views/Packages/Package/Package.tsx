import type { Component, PropsWithLink } from '@/types'
import { Button, Icon } from '@/components'
import { formatPrice } from '@/helpers'
import { styled, mediaQuery } from '@/styles'

export type PackageProps = PropsWithLink<{
  title: string
  price: number
  duration: number
  description: string
  features: [string, string, string, string, string]
}>

const PackageComponent: Component<PackageProps> = ({
  id,
  title,
  price,
  duration,
  description,
  features,
  link,
  ...rest
}) => {
  const formattedPrice = formatPrice(price)

  return (
    <article aria-labelledby={id} {...rest}>
      <div className='section'>
        <h3 id={id}>{title}</h3>
        <p>
          {formattedPrice} <span>{duration} months</span>
        </p>
        <p>{description}</p>
      </div>
      <div className='section'>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <Icon name='check' size={1.2} className='icon' />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='section'>
        <Button text='Sign up now' link={link} className='btn' isFull />
      </div>
    </article>
  )
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

  h3 {
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
    display: inline-block;
    margin-right: 10px;
  }

  .btn {
    margin: 15px 0;
  }
`

export default Package

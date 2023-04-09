import type { PackageComponent } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components'
import { formatPrice } from '@/helpers'
import { styled } from '@/styles'

const PackageComponent: PackageComponent = ({ heading, price, duration, benefits, ...rest }) => {
  const formattedPrice = formatPrice(price)

  return (
    <article {...rest}>
      <div className='package'>
        <div className='package__section'>
          <h4 className='package__heading'>{heading}</h4>
          <p className='package__paragraph'>
            {formattedPrice} <span>{duration} months</span>
          </p>
          <p className='package__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit nemo natus ad vero molestias?
          </p>
        </div>
        <div className='package__section'>
          <ul className='package__benefit--list'>
            {benefits.map((benefit, index) => (
              <li key={index} className='package__benefit--item'>
                <FontAwesomeIcon icon={faCheck} className='package__benefit--icon' />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className='package__section'>
          <Button text='Sign up now' isFull />
        </div>
      </div>
    </article>
  )
}

const Package = styled(PackageComponent)`
  .package {
    background-color: var(--color-white);
    width: 90%;
    margin: 0 auto 30px;
    box-shadow: 0 3px 2px var(--color-shadow);
    text-align: left;

    &__section {
      padding: 15px;
      border-bottom: 1px solid var(--color-shadow);

      :first-of-type {
        background-color: var(--color-lighter);
      }

      :last-of-type {
        border: 0;
        text-align: center;

        span {
          margin: 15px 0;
        }
      }
    }

    &__heading {
      font-size: 150%;
      color: var(--color-grey);
      font-weight: 400;
      margin-bottom: 50px;
      text-transform: capitalize;
    }

    &__paragraph {
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

    &__benefit {
      &--list {
        list-style: none;
      }

      &--item {
        color: var(--color-grey);
        padding: 5px 0;
      }

      &--icon {
        width: 1.2rem;
        height: 1.2rem;
        display: inline-block;
        margin-right: 10px;
        color: var(--color-primary);
      }
    }
  }
`

export default Package

import type { PackageComponent } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components'
import { formatPrice } from '@/utils'
import { styled } from '@/styles'

const PackageBoxComponent: PackageComponent = ({ heading, price, duration, benefits, ...rest }) => {
  const formattedPrice = formatPrice(price)

  return (
    <article {...rest}>
      <div>
        <div>
          <h4>{heading}</h4>
          <p>
            {formattedPrice} <span>{duration} months</span>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit nemo natus ad vero molestias?</p>
        </div>
        <div>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheck} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button isFull>sign up now</Button>
        </div>
      </div>
    </article>
  )
}

const PackageBox = styled(PackageBoxComponent)`
  > div {
    background-color: var(--color-white);
    width: 90%;
    margin-bottom: 30px;
    box-shadow: 0 3px 2px var(--color-shadow);
    text-align: left;

    div {
      padding: 15px;
      border-bottom: 1px solid var(--color-shadow);

      :last-of-type {
        border: 0;
        text-align: center;
      }
    }
  }

  h4 {
    font-size: 150%;
    color: var(--color-grey);
    font-weight: 400;
    margin-bottom: 50px;
    text-transform: capitalize;
  }

  p:first-of-type {
    color: var(--color-primary);
    font-size: 300%;
    font-weight: 300;
    margin-bottom: 10px;

    span {
      font-size: 30%;
      font-weight: 500;
    }
  }

  p:last-of-type {
    color: var(--color-grey);
    font-size: 80%;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;

    li {
      color: var(--color-grey);
      padding: 5px 0;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    margin-right: 10px;

    path {
      fill: var(--color-primary);
    }
  }
`

PackageBox.defaultProps = {
  className: 'col span_1_of_3',
}

export default PackageBox

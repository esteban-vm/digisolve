import type { HeadingComponent as HeadingComponentType } from '@/types'
import { styled } from '@/styles'

const HeadingComponent: HeadingComponentType = ({ heading, subheading, ...rest }) => {
  return (
    <div {...rest}>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
    </div>
  )
}

const Heading = styled(HeadingComponent)`
  h2 {
    font-size: 250%;
    text-transform: capitalize;
    color: var(--color-black);
    margin-bottom: 20px;
    margin-top: 150px;
  }

  h3 {
    font-size: 150%;
    color: var(--color-grey);
    font-weight: 300;
    margin-bottom: 30px;
    line-height: 1.5;

    ::after {
      content: ' ';
      display: block;
      height: 2px;
      width: 100px;
      background-color: var(--color-primary);
      margin: 30px auto 0;
    }
  }
`

Heading.defaultProps = {
  className: 'row',
  role: 'none',
  subheading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus.',
}

export default Heading

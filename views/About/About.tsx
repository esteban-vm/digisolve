import type { View } from '@/types'
import Image from 'next/image'
import { Button } from '@/components'
import { about } from '@/images'
import { styled } from '@/styles'

const AboutComponent: View = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <div className='col span_1_of_2'>
          <h2 id='about_heading'>A digital agency focused on growing your online presence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <Button text='Read more' href='#' />
        </div>
        <div className='col span_1_of_2'>
          <Image src={about} alt='Digisolve app on Laptop' />
        </div>
      </div>
    </section>
  )
}

const About = styled(AboutComponent)`
  margin-top: 150px;
  padding-bottom: 20px;

  h2 {
    color: var(--color-black);
    text-transform: capitalize;
    font-size: 250%;
    font-weight: 500;
    margin-bottom: 50px;
  }

  p {
    color: var(--color-grey);
    margin-bottom: 50px;
  }

  img {
    width: 80%;
    height: auto;
  }

  .span_1_of_2 {
    :first-of-type {
      text-align: left;
    }

    :last-of-type {
      text-align: right;
    }
  }
`

About.defaultProps = {
  'aria-labelledby': 'about_heading',
}

export default About

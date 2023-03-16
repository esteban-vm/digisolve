import type { AppComponent } from '@/types'
import Image from 'next/image'
import { Button } from '@/components'
import { about } from '@/utils/images'
import { styled } from '@/utils/styles'

const About: AppComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <div className='col span_1_of_2'>
          <h2>A Digital Agency Focused On Growing your Online presence</h2>
          <p role='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <p role='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <Button href='#'>Read More</Button>
        </div>
        <div className='col span_1_of_2'>
          <Image src={about} alt='Digisolve app on Laptop' />
        </div>
      </div>
    </section>
  )
}

const StyledAbout = styled(About)`
  margin-top: 150px;
  padding-bottom: 20px;

  h2 {
    color: var(--color-black);
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
    &:first-child {
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
  }
`

export default StyledAbout

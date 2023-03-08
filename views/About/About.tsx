import type { FC } from 'react'
import Image from 'next/image'
import { Button } from '@/components'
import { about } from '@/images'
import * as Styled from './About.styled'

const About: FC = () => {
  return (
    <section>
      <div className='row'>
        <Styled.Box className='col span_1_of_2'>
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
        </Styled.Box>
        <Styled.Box className='col span_1_of_2'>
          <Image src={about} alt='Digisolve app on Laptop' />
        </Styled.Box>
      </div>
    </section>
  )
}

export default About

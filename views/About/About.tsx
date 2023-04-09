import type { Component } from '@/types'
import { useId } from 'react'
import Image from 'next/image'
import { Button, Grid } from '@/components'
import { about } from '@/images'
import { styled } from '@/styles'

const AboutComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <Grid.Col isHalf>
          <h2 id={id} className='about__heading'>
            A digital agency focused on growing your online presence
          </h2>
          <p className='about__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <p className='about__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <Button text='Read more' />
        </Grid.Col>
        <Grid.Col isHalf>
          <Image src={about} alt='Digisolve app on Laptop' className='about__image' />
        </Grid.Col>
      </Grid.Row>
    </section>
  )
}

const About = styled(AboutComponent)`
  margin-top: 150px;
  padding-bottom: 20px;

  .about {
    &__heading {
      color: var(--color-black);
      text-transform: capitalize;
      font-size: 250%;
      font-weight: 500;
      margin-bottom: 50px;
    }

    &__paragraph {
      color: var(--color-grey);
      margin-bottom: 50px;
    }

    &__image {
      width: 80%;
      height: auto;
    }
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

export default About

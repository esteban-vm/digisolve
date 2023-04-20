import type { Component } from '@/types'
import { useId } from 'react'
import Image from 'next/image'
import { Button, Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'

const AboutComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <Grid.Col isHalf>
          <h2 id={id}>A digital agency focused on growing your online presence</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam molestiae quod vitae deserunt.
            Architecto fugiat veritatis cum necessitatibus sapiente!
          </p>
          <Button text='Read more' />
        </Grid.Col>
        <Grid.Col isHalf>
          <Image src='/img/about-img.jpg' alt='Digisolve app on Laptop' width={1_920} height={1_280} />
        </Grid.Col>
      </Grid.Row>
    </section>
  )
}

const About = styled(AboutComponent)`
  margin-top: 150px;
  padding-bottom: 20px;

  ${mediaQuery('md')} {
    margin-top: 60px;
  }

  h2 {
    color: var(--color-black);
    text-transform: capitalize;
    font-size: 250%;
    font-weight: 500;
    margin-bottom: 50px;

    ${mediaQuery('md')} {
      margin-bottom: 35px;
    }

    ${mediaQuery('sm')} {
      margin-bottom: 20px;
    }
  }

  p {
    color: var(--color-grey);
    margin-bottom: 50px;

    :first-of-type {
      ${mediaQuery('lg')} {
        margin-bottom: 20px;
      }
    }

    :last-of-type {
      ${mediaQuery('sm')} {
        margin-bottom: 30px;
      }
    }
  }

  img {
    width: 80%;
    height: auto;
  }

  .col {
    :first-of-type {
      text-align: left;

      ${mediaQuery('md')} {
        padding-left: 1%;
      }
    }

    :last-of-type {
      text-align: right;

      ${mediaQuery('md')} {
        margin-left: 0;
        text-align: center;
      }
    }
  }
`

export default About

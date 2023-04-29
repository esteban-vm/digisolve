import type { Component } from '@/types'
import { useId } from 'react'
import { Waypoint } from 'react-waypoint'
import { useRef } from 'react'
import Image from 'next/image'
import { Button, Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'

const AboutComponent: Component = (props) => {
  const nameID = useId()
  const aboutRef = useRef<HTMLElement>(null)

  const animateAbout = (action: 'add' | 'remove') => {
    return () => {
      aboutRef.current?.classList[action]('animate__fadeIn')
    }
  }

  return (
    <Waypoint onEnter={animateAbout('add')} onLeave={animateAbout('remove')}>
      <section id='about' aria-labelledby={nameID} ref={aboutRef} {...props}>
        <Grid.Row>
          <Grid.Col className='about_col' isHalf>
            <h2 id={nameID}>A digital agency focused on growing your online presence</h2>
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
          <Grid.Col className='about_col' isHalf>
            <Image src='/img/about-img.jpg' alt='Digisolve app on Laptop' width={1_920} height={1_280} />
          </Grid.Col>
        </Grid.Row>
      </section>
    </Waypoint>
  )
}

AboutComponent.defaultProps = {
  className: 'animate__animated animate__fast',
}

const About = styled(AboutComponent)`
  margin-top: 150px;
  padding-bottom: 20px;
  opacity: 0.1;

  .animate__fadeIn {
    opacity: 1;
  }

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

    ${mediaQuery('xs')} {
      margin: 30px auto;
    }
  }

  .about_col {
    :first-of-type {
      text-align: left;

      ${mediaQuery('md')} {
        padding-left: 1%;
      }

      ${mediaQuery('xs')} {
        text-align: center;
        padding: 0;
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

import { styled } from '@/styles'

export const Wrapper = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('/img/header-img.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;

  & h1 {
    font-size: 500%;
    color: #fff;
    font-weight: 400;
    margin-bottom: 20px;
  }

  & h2 {
    font-size: 200%;
    color: #fff;
    font-weight: 400;
  }
`

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export const Text = styled.div`
  margin-bottom: 100px;
`

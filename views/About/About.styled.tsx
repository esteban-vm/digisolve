import { styled } from '@/styles'

export const Box = styled.div`
  margin-top: 150px;

  & h2 {
    color: #000;
    font-size: 250%;
    font-weight: 500;
    margin-bottom: 50px;
  }

  & p {
    color: #555;
    margin-bottom: 50px;
  }

  & img {
    width: 80%;
    height: auto;
  }

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`

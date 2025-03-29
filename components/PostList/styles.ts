import styled from 'styled-components'

export const Header = styled.h1`
  font-family: "Special Elite";
  text-align: center;
`

export const CardFlex = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100%;
  justify-content: center;
  padding: 0;

  li {
    list-style-type: none;
  }
`

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  padding-top: 15px;

  @media (max-width: 1000px) {
    display: initial;
  }
`

export const Error = styled.p`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
`

export const LoadingIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 40px;
    width: 40px;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }

  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.5);}
    100% {transform: scale(1);}
  }
`
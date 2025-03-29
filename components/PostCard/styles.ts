import styled from 'styled-components'

export const Container = styled.div`
  a, a:hover {
    text-decoration: none;
    color: black;
  }

  a:hover > div, a:focus > div {
    transform: translateY(-5px);
  }
`

export const Card = styled.div`
  height: 280px;
  width: 220px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  background: var(--secondary);
  transition: transform 0.3s;
  text-align: center;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 100px;
    width: calc(100vw - 40px);
  }
`

export const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    flex-flow: row;
    overflow: hidden;
  }
`

export const Title = styled.h2`
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 50%;
  }
`

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`

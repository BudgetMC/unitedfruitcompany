import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  padding-top: 160px;

  @media (max-width: 800px) {
    padding-top: 0;
  }
`

const BackgroundTitle = styled.h1`
  position: absolute;
  overflow: hidden;
  padding: 0;
  margin: 0;
  font-size: clamp(5rem, 15vw, 30rem);
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;

  @media (max-width: 800px) {
    display: none;
  }
`

export const BackgroundTitleStart = styled(BackgroundTitle)`
  left: 20px;
  top: 200px;
`

export const BackgroundTitleEnd = styled(BackgroundTitle)`
  right: 20px;
  bottom: 200px;
`

export const MobileTitle = styled.h1`
  display: none;

  @media (max-width: 800px) {
    display: block;
    font-size: 3.5rem;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 30px;
    text-align: center;
  }
`

export const Header = styled.h2< { textAlign: string } >`
  text-align: ${props => props.textAlign};
  font-family: "Alegreya Sans";
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
  font-size: 3rem;
`
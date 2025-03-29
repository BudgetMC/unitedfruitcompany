import styled from 'styled-components'

export const FullwidthContainer = styled.div`
  width: 100%;
  height: 100px;
  background: var(--secondary);
  font-family: "Alegreya Sans";
`

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

export const Header = styled.p`
  font-size: 2rem;

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
`

export const DesktopNavLink = styled.p`
  font-size: 1rem;
  width: 60px;
  text-align: center;

  @media (max-width: 800px) {
    display: none;
  }
`

export const MobileNavLink = styled.div`
  display: none;

  svg {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
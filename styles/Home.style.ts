import styled from 'styled-components'

export const Main = styled.main`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
`

export const MainContent = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
  font-family: 'Special Elite';
  z-index: 1;
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};

  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://unitedfruitcompany.files.wordpress.com/2021/11/map.jpg') center no-repeat;
    background-size: cover;
    z-index: -1;
    filter: brightness(0.3);
  }
`

// Keeps the content from overlapping with the navbar.
export const NavbarPlaceholder = styled.div`
  height: ${({ theme }) => theme.navbar.height};
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`

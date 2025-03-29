import styled from "styled-components";

export const NavDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navHeight);
  z-index: 10000;
  background: ${(props) => props.color};
  color: var(--primary);
  box-shadow: 0 1px 2px black;
  font-family: "Alegreya Sans";

  a:hover {
    background: none;
    color: var(--secondary);
  }

  img {
    border-radius: 20px;
  }
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NavRight = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.3rem;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const DropdownToggle = styled.div`
  display: none;

  svg {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MobileDropdown = styled.div`
  display: none;
  position: absolute;
  top: var(--navHeight);
  left: 0;
  margin: auto;
  width: 100%;
  background: ${(props) => props.color};
  font-size: 2rem;
  padding: 20px 0;
  box-shadow: 0 1px 2px black;

  @media (max-width: 780px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

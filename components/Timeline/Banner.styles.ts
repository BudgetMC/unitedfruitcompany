import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - var(--navHeight));
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  text-align: center;

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const SeeMoreButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  font-family: "Alegreya Sans";

  &:hover,
  &:focus {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
  }

  svg {
    height: 40px;
    width: 40px;
  }
`;

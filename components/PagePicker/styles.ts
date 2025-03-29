import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  background: var(--secondary);
  border: 1px solid var(--darkBackground);
  border-radius: 10px;
  transition: filter 0.2s;
  box-shadow: var(--shadow);

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

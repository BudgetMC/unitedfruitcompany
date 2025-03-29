import styled from "styled-components";

export const Pane = styled.div`
  background: var(--darkBackground);
  margin-top: 115px;
  border-radius: 10px;
  font-family: "Alegreya Sans";
  color: white;
  box-shadow: var(--shadow);
`;

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-rows: 80px 1fr;
`;

export const Label = styled.label`
  font-size: 1.15rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1.1rem;
`;

export const ResetButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: calc(100% - 39px);
  top: -39px;
  z-index: 100;
  border: none;
  background: rgba(1, 1, 1, 0);
  padding: 0;
  transition: 0.2s;
  color: black;

  &:hover {
    cursor: pointer;
    background: rgba(1, 1, 1, 0.2);
  }

  svg {
    height: 38px;
    width: 38px;
  }
`;

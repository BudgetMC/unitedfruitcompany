import styled from "styled-components";

export const FlexContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

export const FlexContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

export const ItemContainer = styled.div`
  padding: 2rem;
  height: 240px;
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  filter: grayscale(1);
  border-radius: 5px;
  transition: filter 0.2s;
  overflow: hidden;
  position: relative;

  div {
    border-radius: 5px;
  }

  p {
    z-index: 100;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 1.7rem;
    border-radius: 10px;
  }

  p span {
    position: relative;
    top: 4px;
  }

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 5px;
    transition: transform 0.2s;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    cursor: pointer;
    filter: grayscale(0);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1000px) {
    height: 80px;
    width: 90vw;

    p {
      font-size: 1.4rem;
    }
  }
`;

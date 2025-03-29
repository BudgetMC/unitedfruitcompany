import styled from 'styled-components'

export const Box = styled.div`
  background: var(--secondary);
  padding: 16px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 15fr;
  align-items: center;
  
  svg {
    height: 40px;
    width: 40px;
  }

  p {
    margin: 0;
    padding-left: 1.5em;
    text-indent: -1.5em;
  }

  @media (max-width: 800px) {
    svg {
      height: 16px;
      width: 16px;
    }

    p {
      max-width: 70vw;
      font-size: 1rem;
    }

    a {
      overflow-wrap: break-word;
    }
  }
`
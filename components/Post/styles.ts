import styled from 'styled-components'

export const Title = styled.h1`
  font-family: "Special Elite";
  text-align: center;
  padding: 10px 0;
  position: relative;
  top: 5px;
  font-size: 2.7rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  margin: auto;
  text-align: center;

  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
    margin: auto;
    border-radius: 10px;
  }
`

// Most styles are provided by the Wordpress API
// They have pretty good defaults but we need to
// override some things.
export const Content = styled.div`
  a {
    overflow-wrap: break-word;
  }

  // This is Wordpress's class for right-aligned text.
  // For some reason it doesn't automatically format it
  // like it does for everything else.
  .has-text-align-right {
    text-align: right;
  }

  @media (max-width: 600px) {
    hyphens: auto;

    p {
      font-size: 1.1rem;
    }
  }
`
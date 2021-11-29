import styled from 'styled-components'

export const Pane = styled.div`
  background: #3a3a3a;
  margin-top: 115px;
  border-radius: 10px;
  font-family: 'Alegreya Sans';
  color: white;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const PaneContent = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-rows: 60px 1fr;
`

export const Form = styled.form`
`

export const Label = styled.label`
  text-size: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
`
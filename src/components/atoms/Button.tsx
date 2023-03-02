import styled from 'styled-components'

interface Props {
    size?: number,
}

export const Button = styled.button<Props>`
  display: inline-block;
  color: palevioletred;
  font-size: 0.9em;
  margin: ${(props) => props.size || 1}em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* display: block; */
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #5a6268;
  }
`
export const GreenButton = styled(Button)`
  color: #fcfcfc;
  background-color: green;
`
export const RedButton = styled(Button)`
  color: #fcfcfc;
  background-color: #fa300c;
`
export const BlueButton = styled(Button)`
  color: #fcfcfc;
  background-color: #0051ff;
`

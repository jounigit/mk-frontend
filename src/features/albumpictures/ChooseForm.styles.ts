import styled from 'styled-components'

interface Props {
    fs?: string,
    color?: string,
    pd?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export const ChooseButton = styled.button<Props>`
    font-size: 0.6rem;
    background-color: ${(props) => props.color};
    color: white;
    padding: ${(props) => props.pd};
    border: 0;
    cursor: pointer;

    :hover {
    background-color: #5a6268;
    color: white;
  }
`
import styled from 'styled-components/macro'

export const ChooseWrapper = styled.div`
  padding: 1.4rem;
  border: 0.1rem solid var(--gray-4);
  margin-bottom: 2rem;
`

export const ChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: .7rem;
  justify-content: center;
    align-items: stretch;
`

export const ImageBox = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 250px;
  height: 100%;
  border: 1px solid var(--gray-3);
  padding: .4rem;
  p {
    color: var(--gray-4);
    font-size: .9rem;
    font-weight: 600;
  }
`


export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  /* object-fit: contain; */
`
export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 2px;
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  padding: 0.6rem;
`

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: .5rem;
`
export const LabelText = styled.span`
  /* background-color: white; */
  color: black;
  font-size: .8rem;
  ${Input}:checked + && {
    color: red;
  }
`
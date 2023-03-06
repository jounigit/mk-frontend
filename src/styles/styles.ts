import styled from 'styled-components'
import { TABLET } from './theme/breakpoints'

export const SiteContent = styled.div`
    flex: 1 0 auto;
    margin: 2rem;
`

export const BaseFooter = styled.div` 
    display: flex; 
    flex-direction: column;

    @media ${TABLET} {
        flex-direction: row;
    }
`
export const BaseContainer = styled.div`
  display: flex;
  box-shadow: var(--shadow-primary);
  border-radius: 5px;
  background: var(--bg-primary);
`

export const FormContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1.4rem;
    /* margin-top: 7rem; */
`
export const Form = styled.form`
    width: 300;
    background: gray;
    border: solid red 2px; 
`
export const Input = styled.input`
  display: block;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`
export default {
  Input, Form, FormContainer, BaseContainer, BaseFooter, SiteContent
}
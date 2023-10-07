import { LANGUAGES } from '@/constants'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'

const Select = styled.select`
    appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: rgba(255, 255, 255, 0.0);
  color: #fcfcfc;
  padding-left: 5px;
  font-size: 1rem;
  border:none;
  margin-left: 10px;

  :hover {
    background-color: rgba(255, 255, 255, 0.40);
  }

    option {
        color: gray;
        background-color: rgba(255, 255, 255, 0.40);
        font-size: .9rem;
        border-radius: 3px;
        display: flex;
        white-space: pre;
        min-height: .2rem;
        padding: 1px 2px 1px;
        /* :hover, :focus {
            background: rgba(255, 255, 255, 0.60);
        } */
    }
    option:checked{
        /* color: rgb(246, 250, 0); */
        background-color: rgb(5, 26, 1);
    }
    option:focus, option:hover {
        background-color: rgba(255, 255, 255, 0.60);
    }
`

export const SelectLang = () => {
  const { i18n, } = useTranslation()


  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }

  return (
    <>
      {/* <label>Lang:</label> */}
      <Select defaultValue={'fi'} onChange={onChangeLang}>
        {LANGUAGES.map(({
          code,
          label
        }) => <option key={code} value={code}>
          {label}
        </option>)}
      </Select>
    </>
  )
   
}
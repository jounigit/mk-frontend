import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

const Box = styled.div`
  display: inline-block;
  margin: 10px;
  width: 100px;
  height: 30px;

  .flag-icon {
    cursor: pointer;
    transition: transform .2s;
  }

  .flag-icon:hover {
    transform: scale(1.2);
  }
`

const SelectLangFlag = () => {
  const { i18n, } = useTranslation()


  const onChangeLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const span: HTMLSpanElement = e.currentTarget
    i18n.changeLanguage(span.title)
  }
  return (
    <Box>
      <span
        onClick={onChangeLang}
        title='fi'
        className="flag flag-country-fi flag-icon"
      />
      <span style={{ margin: '0 5px' }}>|</span>
      <span
        onClick={onChangeLang}
        title='en'
        className="flag flag-country-gb flag-icon"
      />
    </Box>
  )
}

export default SelectLangFlag
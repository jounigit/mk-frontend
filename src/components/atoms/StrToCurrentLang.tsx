import { useTranslation } from 'react-i18next'

export function StrToCurrentLang(str: string, str_en: string | undefined) {
  const { i18n } = useTranslation()
    
  const isEn = (i18n.language === 'en' && str_en)
  return isEn ? str_en : str
}
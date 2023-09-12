import { FC } from 'react'
import { Content, Title } from './Cv.styles'
import { ICv } from '@/types'

export interface CvProps {
  cv: ICv
}

export const CvListItem: FC<CvProps> = (props) => {
  const { title, content } = props.cv
  const innerHtmlTxt = <div dangerouslySetInnerHTML={{ __html: content }} />

  return (
    <>
      <Title>{title}</Title>
      <Content>{innerHtmlTxt}</Content>
    </>
  )
}
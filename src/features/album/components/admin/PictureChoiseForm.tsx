import config from '@/data/config'
import { IPicture } from '@/types'
import React from 'react'
import { formatUrl } from '@/components/atoms/utils'
import {
  ChooseButton, ChooseImg, ChooseImgBox
} from '@/features/shared/chooseImg.styles'

type Props = {
    handleChoise: (id: number) => void
    picture: IPicture
    btnTxt: string
    btnColor: string
}

const picFolder = config.IMAGES_BIG_URL as string

export default function PictureChoiseForm(props : Props) {
  const { handleChoise, picture, btnTxt, btnColor } = props
  const { id, image, title } = picture

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleChoise(id)
  }

  return (
    <ChooseImgBox>
      <form onSubmit={(handleCheck)}>
        <ChooseImg src={formatUrl(picFolder, image)} />
        <details>
          <summary>{title}</summary>
          <p>{picture.year} {picture.size}</p>
          <p>{picture.content}</p>
        </details>
        <ChooseButton color={btnColor} pd='5px' type='submit'>
          {btnTxt}
        </ChooseButton>
      </form>
    </ChooseImgBox>
  )
}

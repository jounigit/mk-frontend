import config from '@/data/config'
import { IPicture } from '@/types'
import React from 'react'
import { ImageBox, Image } from './Choose.styles'
import { formatUrl } from '@/components/atoms/utils'
import { ChooseButton } from '@/features/albumpictures/ChooseForm.styles'

type Props = {
    handleChoise: (id: number) => void
    picture: IPicture
    btnTxt: string
    btnColor: string
}

const picFolder = config.IMAGES_THUMB_URL as string

export default function PictureChoiseForm(props : Props) {
  const { handleChoise, picture, btnTxt, btnColor } = props
  const { id, image, title } = picture

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleChoise(id)
  }

  return (
    <ImageBox>
      <form onSubmit={(handleCheck)}>
        <Image src={formatUrl(picFolder, image)} />
        <details>
          <summary>{title}</summary>
          <p>{picture.year} {picture.size}</p>
          <p>{picture.content}</p>
        </details>
        <ChooseButton color={btnColor} pd='5px' type='submit'>
          {btnTxt}
        </ChooseButton>
      </form>
    </ImageBox>
  )
}

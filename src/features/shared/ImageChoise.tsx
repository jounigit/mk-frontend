import config from '@/data/config'
import { IPicture } from '@/types'
import React from 'react'
import { formatUrl } from '@/components/atoms/utils'
import {
  ChooseButton
} from '@/features/shared/chooseImg.styles'

type Props = {
    handleChoise: (id: number) => void
    picture: IPicture
    btnTxt: string
    btnColor: string
}

const picFolder = config.IMAGES_BIG_URL as string

export default function ImageChoise(props : Props) {
  const { handleChoise, picture, btnTxt, btnColor } = props
  const { id, image, title } = picture
  const picSrc = formatUrl(picFolder, image)

  const handleCheck = () => {
    handleChoise(id)
  }

  return (
    <article>
      <div>
        <img src={picSrc} />
      </div>
      <details>
        <summary>{title}</summary>
        <p>{picture.year} {picture.size}</p>
        <p>{picture.content}</p>
      </details>
      <ChooseButton
        color={btnColor}
        pd='5px'
        onClick={handleCheck}
      >
        {btnTxt}
      </ChooseButton>
    </article>
  )
}

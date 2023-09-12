import { FC, useEffect, useState } from 'react'
import {
  Image,
  PictureInfo,
} from './image-modal.style'
import { IPicture } from '../../types'

interface IImageModal {
  imgUrl: string | undefined;
  pic: IPicture;
}

type DimType = {
  height: number;
  width: number;
  isPortrait: boolean;
}

const loadImage = (
  setImageDimensions: React.Dispatch<DimType>,
  imageUrl: string) => {
  const img = document.createElement('img')
  img.src = imageUrl && imageUrl

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
      isPortrait: img.width < img.height
    })
  }
  img.onerror = (err) => {
    console.log('img error')
    console.error(err)
  }
}

export const ImageModal: FC<IImageModal> = ({ imgUrl, pic }) => {
  const [imageDimensions, setImageDimensions] = useState<DimType | null>()

  useEffect(() => {
    imgUrl && loadImage(setImageDimensions, imgUrl)
  }, [imgUrl])

  console.log(imageDimensions)
  const portrait = imageDimensions ? imageDimensions.isPortrait : false

  const showInfo = <PictureInfo portrait={portrait}>
    {pic.year && `${pic.year}, `}
    {pic.size && `${pic.size}`}
    {pic.technique && <p>{pic.technique}</p>}
    {pic.content && <p>{pic.content}</p>}
    {pic.photographer && <p>Kuva: {pic.photographer}</p>}
  </PictureInfo>

  return (
    <>
      {/* {imageDimensions && !imageDimensions.isPortrait &&
      <Message>{showInfo}</Message>
      } */}
      {/* {imageDimensions && imageDimensions.isPortrait &&
        <Message>{showInfo}</Message>} */}
      <Image portrait={portrait}>
        <img src={imgUrl} alt="" />
        {showInfo}
      </Image>
    </>
  )
}

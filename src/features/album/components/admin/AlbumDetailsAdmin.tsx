import { FC, Fragment } from 'react'
// import {
//   ImageBox, Text, Title,
// } from '../AlbumDetails.styles'
import { IAlbum } from '../../../../types'
import { PictureGalleria } from '../../../picture/components/PictureGalleria'
import { DetailsImgBox, DetailsText, DetailsTitle } from '@/styles/styles'

interface Props {
    album: IAlbum
}

export const AlbumDetailsAdmin: FC<Props> = (props) => {
  const { title, content, year, pictures } = props.album

  const images =
  <DetailsImgBox>
    <PictureGalleria
      imageList={pictures}
      width={150}
      height={150}
    />
  </DetailsImgBox>

  return (
    <Fragment>
      <DetailsTitle>
        <h2>{title}</h2>
      </DetailsTitle>
      <h4>{year}</h4>
      <DetailsText>
        {content}
      </DetailsText>
      { images }
    </Fragment>
  )
}

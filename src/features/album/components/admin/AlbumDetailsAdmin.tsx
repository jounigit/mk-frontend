import { FC, Fragment } from 'react'
import {
  ImageBox, Text, Title,
} from '../AlbumDetails.styles'
import { IAlbum } from '../../../../types'
import { PictureGalleria } from '../../../picture/components/PictureGalleria'

interface Props {
    album: IAlbum
}

export const AlbumDetailsAdmin: FC<Props> = (props) => {
  const { title, content, year, pictures } = props.album

  const images =
  <ImageBox>
    <PictureGalleria
      imageList={pictures}
      width={150}
      height={150}
    />
  </ImageBox>

  return (
    <Fragment>
      <Title>
        <h2>{title}</h2>
      </Title>
      <h4>{year}</h4>
      <Text>
        {content}
      </Text>
      { images }
    </Fragment>
  )
}

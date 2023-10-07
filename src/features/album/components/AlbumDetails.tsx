import { FC, Fragment } from 'react'
import {
  ImageBox, Text, Title,
} from './AlbumDetails.styles'
import { IAlbum } from '@/types'
import { PictureGalleria } from '@/features/picture/components/PictureGalleria'
import { StrToCurrentLang } from '@/components/atoms/StrToCurrentLang'

interface Props {
    album: IAlbum
    full?: boolean;
}

export const AlbumDetails: FC<Props> = ({ album }) => {

  const images =
  <ImageBox>
    <PictureGalleria
      imageList={album.pictures}
      width={250}
      height={250}
    />
  </ImageBox>

  const title = StrToCurrentLang(album.title, album.en_title) 

  return (
    <Fragment>
      <Title>
        <h2>{title}</h2>
      </Title>
      { images }
      <Text>
        {album.content}
      </Text>
    </Fragment>
  )
}
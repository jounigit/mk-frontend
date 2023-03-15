import { FC } from 'react'
import { IAlbum } from '@/types'
import {
  AlbumContainer, ImageBox, Text, Title,
} from './AlbumDetails.styles'
import { PictureGalleria } from '@/features/picture/PictureGalleria'

interface Props {
    album: IAlbum
    // eslint-disable-next-line react/require-default-props
    full?: boolean;
}

export const AlbumDetails: FC<Props> = ({
  album, full = false,
}) => {
  // const picsByYear = filterPictures(pictures)
  console.log(album.pictures)
  return (
    <AlbumContainer>
      <Title>
        <h2>{album.title}</h2>
      </Title>
      <ImageBox full={full}>
        <PictureGalleria
          imageList={album.pictures}
          width={250}
          height={250}
        />
      </ImageBox>
      <Text>
        {album.content}
      </Text>
    </AlbumContainer>
  )
}

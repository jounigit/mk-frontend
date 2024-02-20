import { FC, Fragment } from 'react'
import { IAlbum } from '@/types'
import { PictureGalleria } from '@/features/picture/components/PictureGalleria'
import { StrToCurrentLang } from '@/components/atoms/StrToCurrentLang'
import { DetailsImgBox, DetailsText, DetailsTitle } from '@/styles/styles'

interface Props {
    album: IAlbum
    full?: boolean;
}

export const AlbumDetails: FC<Props> = ({ album }) => {

  const images =
  <DetailsImgBox>
    <PictureGalleria
      imageList={album.pictures}
      width={250}
      height={250}
    />
  </DetailsImgBox>

  const title = StrToCurrentLang(album.title, album.en_title)

  return (
    <Fragment>
      <DetailsTitle>
        <h2>{title}</h2>
      </DetailsTitle>
      { images }
      <DetailsText>
        {album.content}
      </DetailsText>
    </Fragment>
  )
}
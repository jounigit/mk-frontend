import { IAlbumPicture, INewAlbumPicture } from '../../../types'
import { UseMutateFunction } from '@tanstack/react-query'


export function deleteAlbumPicture(
  albumPictures: IAlbumPicture[],
  albumId: number,
  deleteAPic: UseMutateFunction<unknown, unknown, number, unknown>
) {
  return (id: number) => {
    console.log('Del pid: ', id, ' - aid: ', albumId)
    // find albumPicture id by picture - and album ids
    const getAbmPic = albumPictures.find((item) =>
      item.picture_id === id.toString() &&
      item.album_id === albumId.toString()
    )

    const albumPictureId = getAbmPic?.id

    console.log('AlbumPic ID: ', albumPictureId && albumPictureId)
    albumPictureId && deleteAPic(albumPictureId)
  }
}

export function addPictureToAlbum(
  albumId: number,
  mutate: UseMutateFunction<unknown, unknown, INewAlbumPicture, unknown>
) {
  return (id: number) => {
    const newAlbumPic: INewAlbumPicture = {
      album_id: albumId,
      picture_id: id
    }
    mutate(newAlbumPic)
  }
}
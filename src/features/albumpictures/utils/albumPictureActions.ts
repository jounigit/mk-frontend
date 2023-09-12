import toast from 'react-hot-toast'
import { IAlbumPicture, INewAlbumPicture } from '../../../types'
import { UseMutateFunction } from '@tanstack/react-query'


export function deleteAlbumPicture(
  albumPictures: IAlbumPicture[],
  albumId: number,
  deleteAPic: UseMutateFunction<unknown, unknown, number, unknown>,
  isDeleted: boolean
) {
  return (id: number) => {
    const getAbmPic = albumPictures.find((item) =>
      item.picture_id === id.toString()
      && item.album_id === albumId.toString()
    )

    const albumPicId = getAbmPic?.id
    const ok = window.confirm(`remove album '' '${id}'?`)
    if (ok === false) {
      return
    }

    albumPicId && deleteAPic(albumPicId)
    if (isDeleted)
      toast.success('Picture removed successfully.', { duration: 3000 })
  }
}

export function addPictureToAlbum(
  albumId: number,
  mutate: UseMutateFunction<unknown, unknown, INewAlbumPicture, unknown>,
  isSuccess: boolean
) {
  return (id: number) => {
    console.log('handleSelected: ', id)
    const newAlbumPic: INewAlbumPicture = {
      album_id: albumId,
      picture_id: id
    }
    mutate(newAlbumPic)
    if (isSuccess)
      toast.success('Picture added successfully.', { duration: 3000 })
  }
}

// toast.success('Picture added successfully.', { duration: 3000 })
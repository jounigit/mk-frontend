import { FC, useEffect, } from 'react'
import AlbumForm from './AlbumForm'
import { INewAlbum } from '@/types'
import { useParams } from 'react-router-dom'
import { useAlbum, useUpdateAlbum } from '../../useAlbum'
import { useGoBack } from '@/hooks/useGoBack'

export const AlbumUpdate: FC = () => {
  const params = useParams()
  const id = Number(params.id)
  const { data: CurrentAlbum } = useAlbum(id)
  const { status, mutate } = useUpdateAlbum()
  const goBack = useGoBack()

  /*****************************************************/
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      goBack()
    }
  }, [goBack, status])

  /************** handle update *************************/
  const handleData = (data: INewAlbum) => {
    const newAlbum = data
    mutate({ id, newAlbum })
  }

  /************** return *************************/
  return (
    <AlbumForm
      handleData={handleData}
      album={CurrentAlbum}
      formName='PÄIVITÄ ALBUMI'
    />
  )
}
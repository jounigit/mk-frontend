import { FC, useEffect, } from 'react'
import AlbumForm from './AlbumForm'
import { toast } from 'react-hot-toast'
import { INewAlbum } from '@/types'
import { useParams } from 'react-router-dom'
import { useAlbum, useUpdateAlbum } from '../../useAlbum'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'
import { useGoBack } from '@/hooks/useGoBack'

export const AlbumUpdate: FC = () => {
  const params = useParams()
  const id = Number(params.id)
  const { isLoading, data, isError, error } = useAlbum(id) // current album
  const { status, error: UpdateError, mutate } = useUpdateAlbum()
  const goBack = useGoBack()
  // const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Album updated successfully.')
      goBack()
    }
  }, [goBack, status])

  /************** get current album *************************/

  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />

  const currentAlbum = data

  /************** handle update *************************/
  if (status === 'error') {
    return <ErrorHandler error={(UpdateError as Error)} />
  }

  const handleData = (data: INewAlbum) => {
    const newAlbum = data
    mutate({ id, newAlbum })
  }

  /************** return *************************/
  return (
    <AlbumForm
      handleData={handleData}
      album={currentAlbum}
      formName='PÄIVITÄ ALBUMI'
    />
  )
}
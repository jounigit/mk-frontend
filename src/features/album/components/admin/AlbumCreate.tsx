import { useCreateAlbum } from '../../useAlbum'
import AlbumForm from './AlbumForm'
import { toast } from 'react-hot-toast'
import { INewAlbum } from '@/types'
import { ErrorHandler } from '@/components/handlers'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AlbumCreate = (): JSX.Element => {
  const { mutate, status, error } = useCreateAlbum()
  const navigate = useNavigate()

  /************** handle mutation *************************/
  if (status === 'error') {
    return <ErrorHandler error={(error as Error)} />
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (status === 'success') {
      toast.success('Album stored successfully.')
      navigate('/dashboard/albums')
    }
  }, [navigate, status])


  const handleData = (data: INewAlbum) => {
    mutate(data)
  }

  /************** return *************************/
  return (
    <AlbumForm
      handleData={handleData}
      formName='UUSI ALBUMI'
    />
  )
}
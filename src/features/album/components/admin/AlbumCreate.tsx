import { FC, useEffect } from 'react'
import { useCreateAlbum } from '../../useAlbum'
import AlbumForm from './AlbumForm'
import { INewAlbum } from '@/types'
import { useNavigate } from 'react-router-dom'

export const AlbumCreate: FC = () => {
  const { mutate, status } = useCreateAlbum()
  const navigate = useNavigate()

  /*****************************************************/
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      navigate('/dashboard/albums')
    }
  }, [navigate, status])

  /************** handle mutation *************************/
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
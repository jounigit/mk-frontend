import { IAlbum } from '@/types'
import { useQuery } from 'react-query'
import apiClient from '../http-common'

export const getAll =async (url:string) => {
  const { data } = await apiClient.get(`/${url}`)
  return data
}

// const getAlbums = async (): Promise<IAlbum[]> => {
//   const { data } = await apiClient.get('/albums')
//   return data
// }

const getAlbums = async() => await getAll('albums')

export function useAlbumsData() {
  const { isError, data } = useQuery('albums', getAlbums)
  
  if (isError) {
    throw new Error('Error fetching data.')
  }
  
  if (data !== undefined) {
    return data
  }
  const emptyData = new Array<IAlbum>()
  return emptyData
}
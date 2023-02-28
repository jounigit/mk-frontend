import { allRecords, IAlbum } from '@/types'
import {
  useQuery,
  UseQueryResult
} from 'react-query'
import apiClient from '../http-common'

export const getAll =async (url:string): Promise<allRecords> => {
  const { data } = await apiClient.get(`/${url}`)
  return data
}

// const getAlbums = async (): Promise<IAlbum[]> => await apiClient.get('/albums')


const getAlbums = async(): Promise<IAlbum[]> => await getAll('albums')

// export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
//   return useQuery(['albums'], getAlbums)
// }

export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery({ queryKey: ['albums'], queryFn: getAlbums })
}

export function useAlbumsData(): IAlbum[] {
  const albumsQuery = useQuery('albums', getAlbums)
  
  if (albumsQuery.isError) {
    throw new Error('Error fetching data.')
  }
  
  if (albumsQuery.isSuccess) {
    return albumsQuery.data
  }
  const emptyData = new Array<IAlbum>()
  return emptyData
}
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query'

import {
  getBySlug,
  getOne,
} from '@/services/apiService'
import { IAlbum, INewAlbum } from '@/types'
import { apiClient } from '@/http-common'

// ####################### services ########################################
//**  Get all */
export const fetchAlbumList = async (): Promise<IAlbum[]> => {
  const response = await apiClient.get('albums')
  return response.data
}

//**  Delete */
export const deleteAlbum = async (id: number): Promise<unknown> => {
  try {
    const response = await apiClient.delete(`/albums/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Can not delete album')
  }
}

//**  Create */
export const createAlbum = async (newAlbum: INewAlbum): Promise<unknown> => {
  try {
    const response = await apiClient.post<unknown>('/albums', newAlbum)
    return response.data
  } catch (error) {
    throw new Error('Can not create album')
  }
}

//**  Update */
interface IUpdateProps{
  id: number;
  newAlbum: INewAlbum;
}

export const updateAlbum = async ({ id, newAlbum }: IUpdateProps)
: Promise<IAlbum> => {
  try {
    const response = await apiClient.put(`/albums/${id}`, newAlbum)
    return response.data
  } catch (error) {
    throw new Error('Can not update album')
  }
}

// ####################### query hooks ########################################
export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery({ queryKey: ['albums'],
    queryFn: fetchAlbumList,
  },
  )
}

export function useAlbum(id:number): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', id],
    queryFn: async () => await getOne<IAlbum>({id, url:'albums'})
  })
}

export function useAlbumBySlug(slug:string): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', slug],
    queryFn: async () => await getBySlug<IAlbum>({slug, url:'album'})
  })
}

// ####################### mutations ########################################
export function useCreateAlbum():
UseMutationResult<unknown, unknown, INewAlbum, unknown> {
  return useMutation({ mutationFn: createAlbum })
}

export function useUpdateAlbum():
UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: updateAlbum, onSuccess: () => {
    useClient.invalidateQueries({ queryKey: ['albums'] })
  },
  })
}

export function useDeleteAlbum():
UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: deleteAlbum, onSuccess: () => {
    console.log('- Use delete success')
    useClient.invalidateQueries({ queryKey: ['albums'] })
  }, onError: () => {
    console.log('- Use delete error')
  } })
}
  
// ##################################################
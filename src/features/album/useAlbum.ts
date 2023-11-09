import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from '@tanstack/react-query'

import {
  getBySlug,
  getOne,
} from '@/services/apiService'
import { IAlbum, INewAlbum } from '@/types'
import { apiClient } from '@/http-common'
import toast from 'react-hot-toast'

// ####################### services ########################################
//**  Get all */
export const fetchAlbumList = async (): Promise<IAlbum[]> => {
  const response = await apiClient.get('albums')
  return response.data
}

//**  Delete */
export const deleteAlbum = async (id: number): Promise<unknown> => {
  const promise = apiClient.delete(`/albums/${id}`)
  const response = await toast.promise(promise, {
    loading: 'Working...',
    success: 'Album removed!',
    error: (e) => 'Failed to remove -\n' + e.message,
  })
  return response.data
}

//**  Create */
export const createAlbum = async (newAlbum: INewAlbum): Promise<unknown> => {
  const promise = apiClient.post<unknown>('/albums', newAlbum)
  const response = await toast.promise(promise, {
    loading: 'Loading...',
    success: 'Album stored successfully!',
    error: (e) => 'Failed to store album -\n' + e.message,
  })
  return response.data

}

interface IUpdateProps{
  id: number;
  newAlbum: INewAlbum;
}

export const updateAlbum = async ({ id, newAlbum }: IUpdateProps)
: Promise<IAlbum> => {
  const promise = apiClient.put(`/albums/${id}`, newAlbum)
  const response = await toast.promise(promise, {
    loading: 'Loading...',
    success: 'Album updated successfully!',
    error: (e) => 'Failed to update album -\n' + e.message,
  })
  return response.data
}

// ####################### query hooks ########################################
export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery({ queryKey: ['albums'],
    queryFn: fetchAlbumList,
    throwOnError: true
  },
  )
}

export function useAlbum(id:number): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', id],
    queryFn: async () => await getOne<IAlbum>({id, url:'albums'}),
    throwOnError: true
  })
}

export function useAlbumBySlug(slug:string): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', slug],
    queryFn: async () => await getBySlug<IAlbum>({slug, url:'album'}),
    throwOnError: true
  })
}

export function useSuspenseAlbumBySlug(slug:string):
 UseSuspenseQueryResult<IAlbum, unknown> {
  return useSuspenseQuery<IAlbum, unknown>({
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
  return useMutation({ mutationFn: updateAlbum, 
    onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ['albums'] })
    },
    onError: () => {
      toast.error('Failed to update Album!')
    }
  })
}

export function useDeleteAlbum():
UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: deleteAlbum, 
    onSuccess: () => {
      toast.success('Album deleted successfully.')
      useClient.invalidateQueries({ queryKey: ['albums'] })
    }, 
    // throwOnError: true
    // onError: (error: Error) => {
    //   toast.error(`Failed to delete Album! - ${error.message}`)
    //   console.log(error.message)
    // } 
  })
}
  
// ##################################################
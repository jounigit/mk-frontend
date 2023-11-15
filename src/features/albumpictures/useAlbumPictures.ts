import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'
import { IAlbumPicture, INewAlbumPicture } from '../../types'
import { apiClient } from '../../http-common'
import { getAll } from '@/services/apiService'
import toast from 'react-hot-toast'

// ###################### services #########################################
const addAlbumPicture = async (newAlbumPicture: INewAlbumPicture)
: Promise<unknown> => {
  const promise = apiClient.post<unknown>('/album-pictures', newAlbumPicture)
  const response = await toast.promise(promise, {
    loading: 'Loading...',
    success: 'Picture chosen successfully!',
    error: (e) => 'Failed to choose album -\n' + e.message,
  })
  return response.data
}

export const deleteAlbumPicture = async (id: number): Promise<unknown> => {
  const promise = apiClient.delete(`/album-pictures/${id}`)
  const response = await toast.promise(promise, {
    loading: 'Working...',
    success: 'Picture removed!',
    error: (e) => 'Failed to remove -\n' + e.message,
  })
  return response
}

// ####################### query hooks ########################################
export function useAlbumPictures(): UseQueryResult<IAlbumPicture[], unknown> {
  return useQuery({
    queryKey: ['album-pictures'],
    queryFn: async () => await getAll('album-pictures'),
    throwOnError: true
  })
}

// ####################### mutations ########################################
export function useAddAlbumPicture():
UseMutationResult<unknown, unknown, INewAlbumPicture, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: addAlbumPicture,
    onSuccess: () => {
      useClient.invalidateQueries()
    }
  })
}

export function useDeleteAlbumPicture():
UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: deleteAlbumPicture,
    onSuccess: () => {
      console.log('- Use delete success')
      useClient.invalidateQueries()
    }, onError: () => {
      console.log('- Use delete error')
    } })
}
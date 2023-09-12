import {
  UseMutationResult,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { INewAlbumPicture } from '../../types'
import { apiClient } from '../../http-common'

// ###################### services #########################################
const addAlbumPicture = async (newAlbumPicture: INewAlbumPicture)
: Promise<unknown> => {
  const response =
  await apiClient.post<unknown>('/album-pictures', newAlbumPicture)
  return response.data
}

export const deleteAlbumPicture = async (id: number): Promise<unknown> => {
  const response = await apiClient.delete(`/album-pictures/${id}`)
  console.log('-Delete album: ', response)
  return response
}

// ####################### query hooks ########################################

// ####################### mutations ########################################
export function useAddAlbumPicture():
UseMutationResult<unknown, unknown, INewAlbumPicture, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: addAlbumPicture,
    onSuccess: () => {
      useClient.invalidateQueries()
    }
  })
}

export function useDeleteAlbumPicture():
UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: deleteAlbumPicture, onSuccess: () => {
    console.log('- Use delete success')
    useClient.invalidateQueries()
  }, onError: () => {
    console.log('- Use delete error')
  } })
}
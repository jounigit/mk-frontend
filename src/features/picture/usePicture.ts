/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { apiClient } from '@/http-common'
import { getAll, getOne } from '@/services/apiService'
import { IPicture, IUpdatePicture } from '@/types'
import {
  UseMutationResult,
  UseQueryResult,
  UseSuspenseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query'
import toast from 'react-hot-toast'

// ###################### services #########################################

//**  Create */
type CreateProps = {
  picture: File
}

interface IUpdateProps {
  id: number;
  newPicture: IUpdatePicture;
}

export const createPicture = async (newPic: CreateProps) => {
  const promise = apiClient.post<unknown>('/upload', newPic)
  const response = await toast.promise(promise, {
    loading: 'Loading...',
    success: 'Picture stored successfully!',
    error: (e) => 'Failed to store picture -\n' + e.message,
  })
  return response.data
}

//**  Update */
export const updatePicture = async ({ id, newPicture }: IUpdateProps) => {
  const promise = apiClient.put(`/pictures/${id}`, newPicture)
  const response = await toast.promise(promise, {
    loading: 'Loading...',
    success: 'Picture updated successfully!',
    error: (e) => 'Failed to update picture -\n' + e.message,
  })
  return response.data
  
}

//**  delete */
export const deletePicture = async (id: number) => {
  const promise = apiClient.delete(`/pictures/${id}`)
  const response = await toast.promise(promise, {
    loading: 'Working...',
    success: 'Picture removed!',
    error: (e) => 'Failed to remove picture -\n' + e.message,
  })
  return response.data
}

// ####################### query hooks ########################################
export function usePictures(): UseQueryResult<IPicture[], unknown> {
  return useQuery({
    queryKey: ['pictures'],
    queryFn: async () => await getAll<IPicture>('pictures'),
    throwOnError: true
  })
}

export function usePicture(id: number): UseQueryResult<IPicture, unknown> {
  return useQuery({
    queryKey: ['pictures', id],
    queryFn: async () => await getOne<IPicture>({ id, url: 'pictures' }),
    throwOnError: true
  })
}

export function useSuspensePicture(id: number):
 UseSuspenseQueryResult<IPicture, unknown> {
  return useSuspenseQuery({
    queryKey: ['pictures', id],
    queryFn: async () => await getOne<IPicture>({ id, url: 'pictures' })
  })
}

// ####################### mutations ########################################
export const useCreatePicture = () => {
  return useMutation({
    mutationFn: createPicture, 
    onSuccess: (data, variables) => {
      console.log({ data })
      console.log({ variables })
    }, onError: (error, variables) => {
      console.log({ error })
      console.log({ variables })
    } })
}

export function useUpdatePicture():
  UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: updatePicture, 
    onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ['pictures'] })
    },
    onError: () => {
      toast.error('Failed to update Picture!')
    }
  })
}

export function useDeletePicture():
  UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: deletePicture, 
    onSuccess: () => {
      console.log('- Use delete success')
      useClient.invalidateQueries()
    }, onError: () => {
      console.log('- Use delete error')
    }
  })
}

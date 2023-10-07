/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { apiClient } from '@/http-common'
import { getAll, getOne } from '@/services/apiService'
import { IPicture } from '@/types'
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'

// ###################### services #########################################

//**  Create */
type CreateProps = {
  image: File
}

export type IUpdatePicture = Omit<IPicture, 'id' | 'image' | 'pic_order'>

interface IUpdateProps {
  id: number;
  newPicture: IUpdatePicture;
}

export const createPicture = async (newPic: CreateProps) => {
  try {
    const response = await apiClient.post<unknown>('/upload', newPic)
    return response.data
  } catch (error) {
    throw new Error('Can not create picture.')
  }
}

//**  Update */
export const updatePicture = async ({ id, newPicture }: IUpdateProps)
: Promise<IPicture> => {
  try {
    const response = await apiClient.put(`/pictures/${id}`, newPicture)
    console.table([response.data])
    return response.data
  } catch (error) {
    throw new Error('Can not update picture')
  }
}

//**  delete */
export const deletePicture = async (id: number) => {
  try {
    const response = await apiClient.delete(`/pictures/${id}`)
    return response.data
  } catch (error) {
    console.log('- DELETE CV', error)
    throw new Error('Can not delete cv')
  }
}

// ####################### query hooks ########################################
export function usePictures(): UseQueryResult<IPicture[], unknown> {
  return useQuery({
    queryKey: ['pictures'],
    queryFn: async () => await getAll<IPicture>('pictures')
  })
}

export function usePicture(id: number): UseQueryResult<IPicture, unknown> {
  return useQuery({
    queryKey: ['pictures', id],
    queryFn: async () => await getOne<IPicture>({ id, url: 'pictures' })
  })
}

// ####################### mutations ########################################
export const useCreatePicture = () => {
  return useMutation({
    mutationFn: createPicture, onSuccess: (data, variables) => {
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
    mutationFn: updatePicture, onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ['pictures'] })
    },
  })
}

export function useDeletePicture():
  UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: deletePicture, onSuccess: () => {
      console.log('- Use delete success')
      useClient.invalidateQueries()
    }, onError: () => {
      console.log('- Use delete error')
    }
  })
}

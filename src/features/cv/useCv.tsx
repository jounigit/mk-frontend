import { apiClient } from '@/http-common'
import { getAll, getOne } from '@/services/apiService'
import { ICv, INewCV } from '@/types'
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult
} from '@tanstack/react-query'

// ###################### services #########################################

interface IUpdateProps {
  id: number;
  newCv: INewCV;
}

//**  Update */
export const updateCv = async ({ id, newCv }: IUpdateProps)
  : Promise<ICv> => {
  try {
    const response = await apiClient.put(`/cvs/${id}`, newCv)
    return response.data
  } catch (error) {
    throw new Error('Can not update cv')
  }
}

//**  Create */
export const createCv = async (newCv: INewCV): Promise<unknown> => {
  try {
    const response = await apiClient.post<unknown>('/cvs', newCv)
    return response.data
  } catch (error) {
    throw new Error('Can not create cv')
  }
}

//**  Delete */
export const deleteCv = async (id: number): Promise<unknown> => {
  try {
    const response = await apiClient.delete(`/cvs/${id}`)
    return response.data
  } catch (error) {
    console.log('- DELETE CV', error)
    throw new Error('Can not delete cv')
  }
}

// ####################### query hooks ########################################
export function useCvs(): UseQueryResult<ICv[], unknown> {
  return useQuery({
    queryKey: ['cvs'],
    queryFn: async () => await getAll<ICv>('cvs')
  })
}

export function useSuspenseCvs():
 UseSuspenseQueryResult<ICv[], unknown> {
  return useSuspenseQuery({
    queryKey: ['cvs'],
    queryFn: async () => await getAll<ICv>('cvs')
  })
}

export function useCv(id: number): UseQueryResult<ICv, unknown> {
  return useQuery({
    queryKey: ['cvs', id],
    queryFn: async () => await getOne<ICv>({ id, url: 'cvs' })
  })
}

export function useSuspenseCv(id: number):
 UseSuspenseQueryResult<ICv, unknown> {
  return useSuspenseQuery({
    queryKey: ['cvs', id],
    queryFn: async () => await getOne<ICv>({ id, url: 'cvs' })
  })
}

// ####################### mutations ########################################
export function useCreateCv():
  UseMutationResult<unknown, unknown, INewCV, unknown> {
  return useMutation({ mutationFn: createCv })
}

export function useUpdateCv():
  UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: updateCv, onSuccess: () => {
      useClient.invalidateQueries({ queryKey: ['cvs'] })
    },
  })
}

export function useDeleteCv():
  UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation({
    mutationFn: deleteCv, onSuccess: () => {
      console.log('- Use delete success')
      useClient.invalidateQueries()
    }, onError: () => {
      console.log('- Use delete error')
    }
  })
}

// write a jest file with mock functions
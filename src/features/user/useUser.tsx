import { apiClient } from '@/http-common'
import { IUserServer } from '@/types'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const getUser =async (): Promise<IUserServer> => {
  const promise = apiClient.get('/user')
  const response = await toast.promise(promise, {
    loading: 'Loading...',
    success: 'User fetched successfully!',
    error: (e) => 'Failed to fetch user-\n' + e.message,
  })
  return response.data
}

export function useUser(): UseQueryResult<IUserServer, unknown> {
  return useQuery<IUserServer, unknown>({
    queryKey: ['user'],
    queryFn: getUser,
    // enabled: false
    // onError: () => {
    //   console.log('User data ERROR!')
    //   localStorage.clear()
    // }
  })
}
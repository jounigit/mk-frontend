import { apiClient } from '@/http-common'
import { IUserServer } from '@/types'
import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'

export function useUser(): UseSuspenseQueryResult<IUserServer, unknown> {
  return useSuspenseQuery<IUserServer, unknown>({ 
    queryKey: ['user'],
    queryFn: async () => await apiClient.get('/user')
    // onError: () => {
    //   console.log('Get user data ERROR!')
    //   localStorage.clear()
    // }
  })
}
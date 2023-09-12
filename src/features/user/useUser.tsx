import { IUserServer } from '@/types'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

export function useUser(): UseQueryResult<IUserServer, unknown> {
  console.log('Get  user data!')
  return useQuery<IUserServer>({ queryKey: ['/user'],
    onSuccess: (data) => {
      console.log('Get  user data success!')
      console.log('-UseUser: ', data)
      localStorage.setItem('authUser', JSON.stringify(data))
    },
    onError: () => {
      console.log('Get user data ERROR!')
      localStorage.clear()
    }
  })
}
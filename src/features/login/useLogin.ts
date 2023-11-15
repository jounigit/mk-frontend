import { apiClient } from '@/http-common'
import { IUserServer } from '@/types'
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

  interface Params {
    email: string;
    password: string;
  }

export interface ILoginResponse {
    status: string;
    message: string;
    user: IUserServer;
    token: string;
  }

  interface ILogoutResponse {
    message: string;
  }

export const login = async (payload: Params): Promise<ILoginResponse> => {
  const response = await apiClient.post(
    '/login',
    {
      email: payload.email,
      password: payload.password,
    },
  )
  return response.data
}

export const logout = async (): Promise<ILogoutResponse> => {
  const response = await apiClient.post('/logout')
  console.log('-Logout: ', response.data)
  return response.data
}

export function useLogin():
UseMutationResult<unknown, unknown, Params, unknown> {
  const useClient = useQueryClient()
  return useMutation({ mutationFn: login,
    onSuccess: (data) => {
      useClient.invalidateQueries({ queryKey: ['user'] })
      console.log('-UseLogin: ', data)
      // localStorage.setItem('authUser', JSON.stringify(data.user))
      // localStorage.setItem('token', JSON.stringify(data.token))
    } })
}

export function useLogout():
UseMutationResult<unknown, unknown, null, unknown> {
  return useMutation({ mutationFn: logout,
    onSuccess: (data) => {
      console.log('-UseLogout: ', data)
    } })
}
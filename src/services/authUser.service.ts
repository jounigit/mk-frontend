import { IUserServer } from '../types'


export const authUser = (): IUserServer | null => {
  const user = localStorage.getItem('authUser') || null

  if (user) {
    return JSON.parse(user) as IUserServer
  }
  return null
}

export const userToken = (): string | null => {
  const token = localStorage.getItem('token') || null
  return token && JSON.parse(token)
}
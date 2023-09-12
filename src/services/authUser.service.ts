import { IUserServer } from '../types'


export const authUser = (): IUserServer | null => {
  const user = localStorage.getItem('authUser') || null
  console.log('Service Auth user: ', user)

  if (user) {
    return JSON.parse(user) as IUserServer
  }
  return null
}

export const userToken = (): string | null => {
  const token = localStorage.getItem('token') || null
  console.log('Service: ', token)
  return token && JSON.parse(token)
}
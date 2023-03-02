import { AllRecords, IdUrlParams, OneRecord } from '@/types'
import apiClient from '../http-common'

export const getAll =async (url:string): Promise<AllRecords> => {
  const { data } = await apiClient.get(`/${url}`)
  return data
}

export const getOne = async ({id, url}: IdUrlParams): Promise<OneRecord> => {
  if (typeof id === 'undefined') {
    Promise.reject(new Error('Invalid id'))
  }
  const { data } = await apiClient.get(`/${url}/${id}`)
  return data
}

export const createOne = async <T extends object>(url: string, newRecord: T): Promise<unknown> => {
  const response = await apiClient.post<unknown>(`${url}`, newRecord)
  return response.data
}

export const updateOne = async <T extends object>(id: number, url: string, newRecord: T):
Promise<OneRecord> => {
  const { data } = await apiClient.put(`/${url}/${id}`, newRecord)
  return data
}

export const deleteOne = async ({id, url}:IdUrlParams): Promise<unknown> => {
  return await apiClient.delete(`/${url}/${id}`)
}

// export const createOne = async (newRecord: CreateOneParams): Promise<unknown> => {
//   if ('status' in newRecord) {
//     const response = await apiClient.post<unknown>('albums', newRecord)
//     return response.data
//   }
// }

// export const createOne = async <T extends object>(url: string, newRecord: T): Promise<unknown> => {
//   // if ('status' in newRecord) {
//   //   const response = await apiClient.post<unknown>('albums', newRecord)
//   //   return response.data
//   // }
//   const response = await apiClient.post<unknown>(`${url}`, newRecord)
//   return response.data
// }
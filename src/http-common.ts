/* eslint-disable @typescript-eslint/no-shadow */
import axios, { AxiosResponse } from 'axios'
import config from './data/config'
import { isTestMode } from './constants'
import { getToken } from './services/token.service'

const apiUrl = isTestMode ?
  config.API_TEST_URL :
  config.API_URL

// if (process.env.NODE_ENV === 'test') {
//   apiUrl = config.API_TEST_URL
//   const token = JSON.parse(localStorage.getItem('token') || '{}')
//   apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
// }
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const apiClient = axios.create({
  baseURL: apiUrl,
})

apiClient.defaults.headers.common['Content-Type'] = 'application/json'
apiClient.defaults.headers.common['Content-Type'] = 'multipart/form-data'

// used in login and logout
export const injectTokenToHeaders = (token: string | null) =>
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
// used in testing
if (isTestMode) {
  const token = getToken()
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (error.response.status === 401) {
      return Promise.reject('Unauthorized')
    }
    return Promise.reject(error)
  }
)


// apiClient.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   // **** Any status codes that falls outside the range of 2xx
//   if (error.response.status === 401) {
//     localStorage.clear()
//     return Promise.reject('Unauthorized')
//   }
//   return Promise.reject(error)
// })

// apiClient.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   // **** Any status codes that falls outside the range of 2xx
//   if (error.response.status === 401) {
//     localStorage.clear()
//     return Promise.reject('Unauthorized')
//   }
//   return Promise.reject(error)
// })
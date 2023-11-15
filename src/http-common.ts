/* eslint-disable @typescript-eslint/no-shadow */
import axios from 'axios'
import config from './data/config'
import { userToken } from './services/authUser.service'

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const apiClient = axios.create({
  baseURL: config.API_URL,
})

apiClient.defaults.headers.common['Content-Type'] = 'application/json'
apiClient.defaults.headers.common['Content-Type'] = 'multipart/form-data'

apiClient.interceptors.request.use (
  function (config) {
    const token = userToken()
    console.log('HTTP token: ', token)
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  function (error) {
    console.log('HTTP error: ', error)
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // **** Any status codes that falls outside the range of 2xx
  if (error.response.status === 401) {
    console.log('ONKO TOKEN: ', localStorage.getItem('token'))
    // console.error('INTERCEPTOR RESPONSE')
    localStorage.clear()
    return Promise.reject('Unauthorized')
    // // throw new Error('401 (Unauthorized)')
    // return window.location.href = '/login'
    // store.dispatch('logout')
    // router.push('/login')
  }
  return Promise.reject(error)
})
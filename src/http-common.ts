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
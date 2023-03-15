import axios from 'axios'
import config from './data/config'

export const apiClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-type': 'application/json'
  }
})
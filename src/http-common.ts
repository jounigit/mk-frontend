import axios from 'axios'

export default axios.create({
  baseURL: 'https://jouniairaksinen.net/laravel-api/api',
  headers: {
    'Content-type': 'application/json'
  }
})
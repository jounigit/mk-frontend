
export const getUser = () => {
  const user = localStorage.getItem('user') || null
  console.log('Service: ', user)
  return user && JSON.parse(user)
}

export const getToken = () => {
  const token = localStorage.getItem('token') || null
  console.log('Service: ', token)
  return token && JSON.parse(token)
}

export const removeToken = () => {
  localStorage.removeItem('token')
}
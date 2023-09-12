import { useState } from 'react'

export const useLocalStorage = () => {
  const [value, setValue] = useState<string | object | null>(null)

  const setItemString = (key: string, value: string) => {
    localStorage.setItem(key, value)
    setValue(value)
  }

  const setItemObject = (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }

  const getItem = (key: string) => {
    const value = localStorage.getItem(key)
    setValue(value)
    return value
  }

  const removeItem = (key: string) => {
    localStorage.removeItem(key)
    setValue(null)
  }

  return { value, setItemString, setItemObject, getItem, removeItem }
}
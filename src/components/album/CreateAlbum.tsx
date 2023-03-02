import { useCreateAlbum, useDeleteAlbum, useUpdateAlbum } from '@/hooks/useAlbums'
// import { INewAlbum } from '@/types'
import React, { FC } from 'react'

export const CreateAlbum: FC = () => {
  const { mutate } = useCreateAlbum()
  const { mutate: deleteAlbum } = useDeleteAlbum()
  const { mutate: updateAlbum} = useUpdateAlbum()

  const handleClick = (e: React.FormEvent): void => {
    e.preventDefault()
    const newAlbum = {
      title: 'React testi',
      year: 2022,
      status: 0,
    }

    mutate({newRecord:newAlbum})
  }

  const remove = (e: React.FormEvent): void => {
    e.preventDefault()
    const ok = window.confirm('remove album?')
    if (ok === false) {
      return
    }
    deleteAlbum({id:20})
  }

  const update = (e: React.FormEvent): void => {
    e.preventDefault()

    const newAlbum = {
      title: 'React päivitys 2',
      year: 3333,
      status: 0,
    }
    const response = updateAlbum({id: 19, newRecord:newAlbum})
    console.log('"""" Response: ', response)
  }

  return (
    <>
      <button onClick={handleClick}>
          Click me
      </button>
      <button onClick={update}>
          päivittä
      </button>
      <button onClick={remove}>
          poista
      </button>
    </>
  )
}
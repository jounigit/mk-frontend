import { useQuery } from '@tanstack/react-query'
import { ErrorHandler, LoadingHandler } from '../../components/handlers'
import { IAlbum } from '../../types'
import { LinkToAlbum } from './LinkToAlbum'
import styled from 'styled-components'

const UlLinks = styled.ul`
  list-style: none; 
`

export const PictureLinks = () => {
  const { isLoading, data, isError, error } =
  useQuery<IAlbum[]>({ queryKey: ['/albums'] })

  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />

  console.table([data])

  const showLinks = data?.map((a) =>
    <li key={a.id}><LinkToAlbum album={a} /></li>
  )

  return (
    <UlLinks>
      {showLinks}
    </UlLinks>
  )
}


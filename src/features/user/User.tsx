// import { LoadingHandler } from '@/components/handlers'
import { useUser } from './useUser'

export const User = (): JSX.Element => {
  const { data } = useUser()

  // console.log('USER STATUS: ', status)

  // if (isLoading) return <LoadingHandler />
  // if (isError) return <h4>User unauthorized.</h4>

  console.log({ data })
  return (
    <div>USER: {data && data.name}</div>
  )
}


export const IsAuthUser = (): boolean => {
  const userQuery = useUser()

  if (userQuery.status === 'success') return true

  return false

}

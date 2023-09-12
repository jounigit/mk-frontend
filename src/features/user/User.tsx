import { LoadingHandler } from '@/components/handlers'
import { useUser } from './useUser'

export const User = (): JSX.Element => {
  const { status, isLoading, isError, data } = useUser()

  console.log('USER compSTATUS: ', status)

  if (isLoading) return <LoadingHandler />
  if (isError) return <h4>User unauthorized.</h4>

  console.log({ data })
  return (
    <div>USER: {data && data.name}</div>
  )
}


export const IsAuthUser = (): boolean => {
  const userQuery = useUser()

  if (userQuery.isSuccess) return true

  return false

}

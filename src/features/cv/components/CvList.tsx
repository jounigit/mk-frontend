import { useQuery } from '@tanstack/react-query'
import { CvContainer } from './Cv.styles'
import { CvListItem } from './CvListItem'
import { ICv } from '@/types'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'

export const CvList = (): JSX.Element => {
  const { isLoading, isError, data, error } =
  useQuery<ICv[]>({ queryKey: ['/cvs'] })

  if (isLoading) return <LoadingHandler />

  if (isError) return <ErrorHandler error={(error as Error)} />

  const showdata = data?.map(c => <CvListItem key={c.id} cv={c} />)
  return (
    <CvContainer>
      {showdata && showdata}
      {showdata && !showdata.length && <p>No CVs yet.</p>}
    </CvContainer>
  )
}

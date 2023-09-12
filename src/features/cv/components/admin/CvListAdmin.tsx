import { useQuery } from '@tanstack/react-query'
import { ICv } from '../../../../types'
import { CvContainer } from '../Cv.styles'
import { ErrorHandler, LoadingHandler } from '../../../../components/handlers'
import { CvListItemAdmin } from './CvListItemAdmin'

export const CvListAdmin = (): JSX.Element => {
  const { isLoading, isError, data, error } =
  useQuery<ICv[]>({ queryKey: ['/cvs'] })

  if (isLoading) return <LoadingHandler />

  if (isError) return <ErrorHandler error={(error as Error)} />

  const showdata = data?.map(c => <CvListItemAdmin key={c.id} cv={c} />)

  // ###################################################################
  return (
    <CvContainer>
      {showdata && showdata}
      {showdata && !showdata.length && <p>No CVs yet.</p>}
    </CvContainer>
  )
}
import { useQuery } from '@tanstack/react-query'
import { ArticleListItem } from './ArticleListItem'
import { ArticleContainer } from './Article.styles'
import { IArticle } from '@/types'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'

const ArticleList = (): JSX.Element => {
  const { isLoading, data, isError, error } =
  useQuery<IArticle[]>({ queryKey: ['/articles'] })

  if (isLoading) return <LoadingHandler />

  if (isError) return <ErrorHandler error={(error as Error)} />

  const showdata = data?.map(a => <ArticleListItem key={a.id} article={a} />)

  return (
    <ArticleContainer>
      {showdata && showdata}
      {showdata && !showdata.length && <p>No Articles yet.</p>}
    </ArticleContainer>
  )
}

export default ArticleList
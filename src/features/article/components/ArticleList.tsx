import { ArticleListItem } from './ArticleListItem'
import { ArticleContainer } from './Article.styles'
import { useArticles } from '../useArticle'

const ArticleList = (): JSX.Element => {
  const { data } = useArticles()

  const showdata = data ?
    data.map(a => <ArticleListItem key={a.id} article={a} />) :
    <h4>no Articles yet.</h4>

  return (
    <ArticleContainer>
      {showdata}
    </ArticleContainer>
  )
}

export default ArticleList
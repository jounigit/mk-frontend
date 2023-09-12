import { FadeDiv } from '@/components/atoms'
import { ArticleList } from '@/features/article'

const ArticlePage = (): JSX.Element => {
  return (
    <FadeDiv timein='0.3s'>
      <ArticleList />
    </FadeDiv>
  )
}

export default ArticlePage
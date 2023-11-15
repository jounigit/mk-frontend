import { IArticle } from '@/types'
import { Item1, Item2, ItemLast } from './Article.styles'
import config from '@/data/config'
import { Button } from '@/components/atoms/Button'

interface Props {
  article: IArticle
}

export function ArticleListItem (props: Props) {
  const { title, media, pub_nm, author, file } = props.article
  const artFolder: string = config.ARTICLES_URL as string
  const fileUrl = artFolder + file

  return (
    <>
      <Item1>{title}</Item1>
      <Item2>
        {media}
        { ' ' }
        {pub_nm}
      </Item2>
      <Item2>
        {author}
      </Item2>
      <ItemLast>
        <a target="_blank" href={fileUrl} rel="noreferrer">
          <Button style={{ margin:0 }}>lue artikkeli</Button>
        </a>
      </ItemLast>
      {/* <hr /> */}
    </>
  )
}
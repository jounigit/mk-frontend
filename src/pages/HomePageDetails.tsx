import React, { FC } from 'react'
import { AlbumListHome } from '../components/album/AlbumListHome'
import { ICategory } from '../types'
import { FadeDiv } from './FadeIn.styles'

interface HPDProps {
    slug: string,
    columns: number,
    categories: ICategory[],
}

export const HomePageDetails: FC <HPDProps> = (
  { slug, columns, categories },
): JSX.Element => {
  const category = categories.find((c) => c.slug === slug)

  return (
    <>
      {category
      && (
        <FadeDiv timein="0.3s">
          <div className="headerMiddle">
            {category.title}
          </div>
          <AlbumListHome categoryId={category.id} columns={columns} />
        </FadeDiv>
      )}
    </>
  )
}

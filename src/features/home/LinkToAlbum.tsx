import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { IAlbum } from '../../types'

interface Props {
  album: IAlbum,
}

export const LinkToAlbum: FC<Props> = (props) => {
  const { title, slug } = props.album

  return (
    <Fragment>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/galleria/${slug}`}
      >
        {title}
      </Link>
    </Fragment>
  )
}

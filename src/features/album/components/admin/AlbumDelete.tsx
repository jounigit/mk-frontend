import { RedButton } from '../../../../components/atoms'
import { ErrorHandler } from '../../../../components/handlers'
import { useDeleteAlbum } from '../../useAlbum'

type Props = {
  id: number,
  title: string
}

export const AlbumDelete = ({ id, title }: Props): JSX.Element => {
  const { status, error, mutate: DeleteAlbum } = useDeleteAlbum()

  /************** handle remove mutation ***********************/
  const remove = (): unknown => {
    // const ok = window.confirm(`remove album '' '${id}'?`)
    // if (ok === false) {
    //   return
    // }

    DeleteAlbum(id)

    if (status === 'error') {
      return <ErrorHandler error={(error as Error)} />
    }
  }

  return (
    <>
      <h3>Haluatko poistaa albumin - {title}</h3>
      <RedButton
        size={0.5}
        onClick={() => remove()}
      >
        Poista album
      </RedButton>
    </>
  )
}
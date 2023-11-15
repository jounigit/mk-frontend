import { RedButton } from '@/components/atoms'
import { DeleteWrapper } from '@/styles/styles'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

type Props = {
  id: number
  title: string
  key: string
  btnTxt: string
  toggle: () => void
  deleteFn: (id: number) => Promise<unknown>
}

export const DeleteRecord = ({
  id, title, key, btnTxt, toggle, deleteFn
}: Props): JSX.Element => {
  const useClient = useQueryClient()
  const { status, mutate } = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      toast.success('Deleted successfully.')
      useClient.invalidateQueries({ queryKey: [key] })
    }
  })

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      toggle()
    }
  }, [status, toggle])

  /************** handle remove mutation ***********************/
  const remove = (): void => {
    mutate(id)
  }

  /************************************************************/
  return (
    <DeleteWrapper>
      <h3>Haluatko poistaa:</h3>
      <h4>{title}</h4>
      <RedButton
        size={0.1}
        onClick={() => remove()}
      >
        {btnTxt}
      </RedButton>
    </DeleteWrapper>
  )
}
import { formatUrl } from '@/components/atoms/utils'
import { IPicture } from '../../types'

interface Props {
    data: IPicture;
    url: string;
    height?: string;
  }

export function ImageInDiv({ data, url }: Props): JSX.Element {
  return (
    <>
      {
        <div>
          <img src={formatUrl(url, data.image)} alt="" />
        </div>
      }
    </>
  )
}

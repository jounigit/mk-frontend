import { IPicture } from '../../types'
import { formatUrl } from './utils'

interface Props {
    data: IPicture[];
    url: string;
    onDivClick: (item: IPicture) => void;
  }

export function ImagesLinkDiv({ data, url, onDivClick }: Props): JSX.Element {
  return (
    <>
      {
        data.map((item) => (
          <div
            key={item.id}
            onClick={() => onDivClick(item)}
          >
            <img src={formatUrl(url, item.image)} alt="" />
          </div>
        )
        )
      }
    </>
  )
}
import { IPicture } from '@/types'
import { formatUrl } from './utils'

interface Props {
    data: IPicture[];
    url: string;
  }

export function ImagesInDiv({data, url}: Props): JSX.Element {
//   function picUrl (img: string): string  { return url+img }
  //   if (data && data.length) {
  //     return null
  //   }
  return (
    <>
      {
        data.map((item) => (
          <div key={item.id}>
            <img src={formatUrl(url, item.image)} alt="" />
          </div>
        )
        )
      }
    </>
  )
}

// interface IObject {
//     id: string | number;
//     image: string;
//   }

// export function ImagesInDiv<T extends IObject>(data: Array<T>): JSX.Element | null {

//   if (data && data.length) {
//     return null
//   }
//   return (
//     <>
//       {
//         data.map((item) => (
//           <div
//             key={item.id}
//           >
//             <img src={item.image} alt="" />
//           </div>
//         )
//         )
//       }
//     </>
//   )
// }
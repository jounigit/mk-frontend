import { BtnInline } from '@/styles/styles'
import Pictures from '../data/pictures.json'
import { GridImgArray, ImgArrBox, ImgDiv } from './TestPics.style'
import { SmallButton } from '@/components/atoms/Button'

interface PicsType {
    id: string
    title: string
    slug: string
    content: string
    image: string
    thumb: string
}

export const TestPics = (): JSX.Element => {
  const picArr = Pictures as PicsType[]

  const picDivs = picArr.map( (p) => (
    <div key={p.id}>
      <ImgDiv>
        <img src={p.image} alt='' />
      </ImgDiv>
      {/* <h4>{p.title}</h4> */}
      {/* <BtnInline><SmallButton /><SmallButton /></BtnInline> */}
    </div>
  ))

  //   const showPics =
  //   <ImgArrBox>
  //     <GridImgArray>
  //         picD
  //     </GridImgArray>
  //   </ImgArrBox>

  return (
    <ImgArrBox>
      <GridImgArray>
        {picDivs}
      </GridImgArray>
    </ImgArrBox>
  )
}

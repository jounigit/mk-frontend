import { SiteContent } from '@/styles/styles'
import styled from 'styled-components'
import { TailSpin } from 'react-loader-spinner'

interface SpinnerProps {
    marginTop?: number;
}
const SpinnerComponent = styled(SiteContent)<SpinnerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`
type Props = {
    mt?: number;
    c?: string;
    h?: number;
    w?: number;
}

export const LoadingSpinner = ({mt=50, c='red', h=80, w=80}: Props): 
JSX.Element =>  
  <SpinnerComponent marginTop={mt}>
    <TailSpin
      color={c}
      height={h}
      width={w}
    />
  </SpinnerComponent>

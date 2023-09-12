// import { NavigateFunction } from 'react-router-dom'
// import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GoBackLinkWrap = styled(Link)`
  margin-bottom: 0.8rem;
  cursor: pointer;
  color: var(--gray-3);
  font-size: 1rem;
  font-weight: 600;
`
// type Props = {
//     onclick: () => void;
// }

// export const GoBackLink: FC<Props> = ({ onclick }) => {
//   return (
//     <GoBackLinkWrap onclick={onclick}
//   )
// }
//   return () => { navigate(-1) }   onClick={() => navigate(-1)}
// export const GoBackLink = ({ navigate }: Props): JSX.Element => {
import { TABLET } from '@/styles'
import styled from 'styled-components/macro'

export const AlbumListContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  width: 100vW !important;
  gap: 0.6em;
  margin: auto;

  @media ${TABLET} {
    max-width: 70%;
  }
`

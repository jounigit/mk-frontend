import React, {
  FC, useState,
  // MouseEventHandler,
} from 'react'
import LeftNav from './LeftNav'
import { StyledBurger } from './LeftNav.styles'

const Burger: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} toggleOpen={setOpen} />
    </>
  )
}
export default Burger

import { FC, useState } from 'react'
import { StyledBurger } from './NavLinks.styles'
import { NavLinks } from './NavLinks'

const Burger: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavLinks open={open} toggleOpen={setOpen} />
    </>
  )
}
export default Burger

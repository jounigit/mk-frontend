import { FC } from 'react'
import { ItemAll, StyledInfo } from './Info.styles'

export const Info: FC = () => (

  <StyledInfo>
    <ItemAll>
      <h2>Marja Kolu</h2>
      <h4>Kuvataitelija </h4>
      <h4>+358 503410232</h4>
      <h4>marja.kolu@gmail.com</h4>
    </ItemAll>
    {/* <Item>
        <Text muted>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum!
          Provident similique accusantium nemo autem.
          Veritatis obcaecati tenetur iure eius earum ut molestias architecto
          voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
          sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
          quas aliquid.
        </Text>
      </Item>
      <Item>
        <h3>Awards</h3>
      </Item> */}
  </StyledInfo>
)
import { authUser } from '@/services/authUser.service'
import { SiteContent } from '@/styles'
import styled from 'styled-components/macro'

const DashboardWrapper = styled(SiteContent)`
    padding: 1rem;
`
const Article = styled.article`
  color: var(--gray-4);
  margin: 1rem 0 ;
  li {
    list-style-position: inside;
  }
`

function Dashboard() {
  const userAuth = authUser()

  return (
    <DashboardWrapper>
      <Article>
        <h2>Moi, {userAuth && userAuth.name}</h2>
        <p>tämä on hallintasivu.</p>
      </Article>
      <Article>
        <h3>Albumit</h3>
        <ul>
          <li>Lisää ja poista albumitietoja.</li>
          <li>Poista albumeja.</li>
          <li>Lisää ja poista kuvia &quot;vaihda kuvia&quot;-linkistä.</li>
        </ul>
      </Article>
      <Article>
        <h3>Kuva-arkisto</h3>
        <ul>
          <li>Lisää ja poista kuvatietoja.</li>
          <li>Poista kuvia.</li>
        </ul>
      </Article>
      <Article>
        <h3>CV</h3>
        <ul>
          <li>Lisää ja poista cvtietoja.</li>
          <li>Poista cv-osio.</li>
        </ul>
      </Article>
    </DashboardWrapper>
  )
}

export default Dashboard


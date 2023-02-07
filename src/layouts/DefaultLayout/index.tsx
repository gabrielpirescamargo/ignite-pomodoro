import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LayputContainer } from './styles'
export function DefaultLayout() {
  return (
    <LayputContainer>
      <Header />
      <Outlet />
    </LayputContainer>
  )
}

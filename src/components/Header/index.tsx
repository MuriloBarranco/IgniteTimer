import { Scroll, Timer } from 'phosphor-react'
import Logo from '../../assets/logo.png'
import { HeaderContainer, IconButton, NavContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="ignite timer" />

      <NavContainer>
        <IconButton to="/" title="Timer">
          <Timer size={24} />
        </IconButton>
        <IconButton to="/history" title="Histórico">
          <Scroll size={24} />
        </IconButton>
      </NavContainer>
    </HeaderContainer>
  )
}

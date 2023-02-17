import { HeaderContainer, InputSearchContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <h1>MyContacts</h1>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato"/>
      </InputSearchContainer>
    </HeaderContainer>

  )
}

import { HeaderContainer, InputSearchContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <h1>My<span>Contacts</span></h1>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato"/>
      </InputSearchContainer>
    </HeaderContainer>

  )
}

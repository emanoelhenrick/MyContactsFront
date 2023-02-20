import { ArrowDown, PencilSimpleLine, TrashSimple } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { Modal } from "../../components/Modal"
import { Card, ContactsContainer, Header, InputSearchContainer, ListContainer } from "./styles"

export function Home() {
  return (
    <ContactsContainer>

      <Modal />


      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato"/>
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <NavLink to="/new">Novo contato</NavLink>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <ArrowDown size={18} />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Manel</strong>
              <small>instagram</small>
            </div>
            <span>fukedfinn07@gmail.com</span>
            <span>(87) 99202-3532</span>
          </div>


          <div className="actions">
            <a href="">
              <PencilSimpleLine />
            </a>

            <button type="button">
              <TrashSimple />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Manel</strong>
              <small>instagram</small>
            </div>
            <span>fukedfinn07@gmail.com</span>
            <span>(87) 99202-3532</span>
          </div>


          <div className="actions">
            <a href="">
              <PencilSimpleLine />
            </a>

            <button type="button">
              <TrashSimple />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Manel</strong>
              <small>instagram</small>
            </div>
            <span>fukedfinn07@gmail.com</span>
            <span>(87) 99202-3532</span>
          </div>


          <div className="actions">
            <a href="">
              <PencilSimpleLine />
            </a>

            <button type="button">
              <TrashSimple />
            </button>
          </div>
        </Card>
      </ListContainer>
    </ContactsContainer>
  )
}

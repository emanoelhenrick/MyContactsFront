import Button from "../Button"
import { Container, Footer, Overlay } from "./styles"

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Ttulo</h1>
        <p>
          Corpo do modal
        </p>

        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}
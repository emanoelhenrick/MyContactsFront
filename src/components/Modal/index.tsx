import Button from "../Button"
import { Container, Footer, Overlay } from "./styles"

export function Modal({ danger = false }: { danger: boolean }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Ttulo</h1>
        <p>
          Corpo do modal
        </p>

        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  )
}

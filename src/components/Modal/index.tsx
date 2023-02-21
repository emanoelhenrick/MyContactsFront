import Button from "../Button"
import { Container, Footer, Overlay } from "./styles"
import ReactDOM from "react-dom"

export function Modal({ danger = false }: { danger: boolean }) {

  return ReactDOM.createPortal(
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
    </Overlay>,
    document.getElementById("modal-root")!
  )

}

import { ReactNode } from "react"
import { Container } from "./styles"

type FormProps = { children: ReactNode }

export function FormGroup({ children }: FormProps) {
  return (
    <Container>
      { children }
    </Container>
  )
}

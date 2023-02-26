import { ReactNode } from "react"
import { Container } from "./styles"

interface FormProps {
  children: ReactNode
  error?: string
}

export function FormGroup({ children, error = undefined }: FormProps) {
  return (
    <Container>
      { children }
      { error && <small>{error}</small>}
    </Container>
  )
}

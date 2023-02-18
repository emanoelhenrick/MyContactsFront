import { ArrowLeft } from "phosphor-react"
import { Link } from "react-router-dom"
import { Container } from "./styles"


export function PageHeader({ title }: { title: string }) {
  return (
    <Container>
      <Link to='/'>
        <ArrowLeft size={18} />
        <span>Voltar</span>
      </Link>

      <h1>{ title }</h1>
    </Container>
  )
}

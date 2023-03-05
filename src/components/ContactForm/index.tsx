import { useState } from "react"
import Button from "../Button"
import { FormGroup } from "../FormGroup"
import Input from "../Input"
import Select from "../Select"
import { Form } from "./styles"

export function ContactForm({ buttonLabel }: any) {

  const [ nameValue, setNameValue ] = useState("")
  const [ emailValue, setEmailValue ] = useState("")
  const [ phoneValue, setPhoneValue ] = useState("")
  const [ categoryValue, setCategoryValue ] = useState("")
  const [errors, setErrors] = useState([] as any)

  function handleNameChange(event: any) {
    setNameValue(event.target.value)

    if (!event.target.value) {
      setErrors((prevState: []) => [
        ...prevState,
        { field: "name", message: "Nome é obrigatório."}
      ])
    } else {
      setErrors((prevState: []) => prevState.filter(
        (error: {field: string}) => error.field !== "name"
      ))
    }
  }


  function handleSubmit(event: any) {
    event.preventDefault()

    console.log({
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      category: categoryValue,
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={nameValue}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido"
      >
        <Input
          placeholder="E-mail"
          error
          value={emailValue}
          onChange={event => setEmailValue(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phoneValue}
          onChange={event => setPhoneValue(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={categoryValue}
          onChange={event => setCategoryValue(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Discord">Instagram</option>
        </Select>
      </FormGroup>

      <Button type="submit">
        {buttonLabel}
      </Button>
    </Form>
  )
}

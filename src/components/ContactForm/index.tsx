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
          onChange={event => setNameValue(event.target.value)}
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

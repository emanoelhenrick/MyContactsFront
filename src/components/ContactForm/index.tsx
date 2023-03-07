import { useState } from "react"
import isEmailValid from "../../utils/isEmailValid"
import Button from "../Button"
import { FormGroup } from "../FormGroup"
import Input from "../Input"
import Select from "../Select"
import { Form } from "./styles"
import { useErrors } from "../../hooks/useErrors"

export function ContactForm({ buttonLabel }: { buttonLabel: string }) {

  const [ nameValue, setNameValue ] = useState("")
  const [ emailValue, setEmailValue ] = useState("")
  const [ phoneValue, setPhoneValue ] = useState("")
  const [ categoryValue, setCategoryValue ] = useState("")

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange(event: {target: { value: string }}) {
    setNameValue(event.target.value)

    if (!event.target.value) {
      setError({field: "name", message: "Nome é obrigatório."})
    } else {
      removeError("name")
    }
  }

  function handleEmailChange(event: {target: { value: string }}) {
    setEmailValue(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({field: "email", message: "Digite um E-mail válido.."})
    } else {
      removeError("email")
    }
  }

  function handleSubmit(event: {preventDefault: () => void}) {
    event.preventDefault()

    console.log({
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      category: categoryValue,
    })
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          placeholder="Nome"
          error={getErrorMessageByFieldName("name") ? true : false}
          value={nameValue}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
          error={getErrorMessageByFieldName("email") ? true : false}
          placeholder="E-mail"
          value={emailValue}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="number"
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

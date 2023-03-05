import { useState } from "react"
import isEmailValid from "../../utils/isEmailValid"
import Button from "../Button"
import { FormGroup } from "../FormGroup"
import Input from "../Input"
import Select from "../Select"
import { Form } from "./styles"

interface ErrorsProps {
  field: string
  message: string
}

export function ContactForm({ buttonLabel }: any) {

  const [ nameValue, setNameValue ] = useState("")
  const [ emailValue, setEmailValue ] = useState("")
  const [ phoneValue, setPhoneValue ] = useState("")
  const [ categoryValue, setCategoryValue ] = useState("")
  const [errors, setErrors] = useState<ErrorsProps[]>([])

  function handleNameChange(event: any) {
    setNameValue(event.target.value)

    if (!event.target.value) {
      setErrors((prevState: ErrorsProps[]) => [
        ...prevState,
        { field: "name", message: "Nome é obrigatório."}
      ])
    } else {
      setErrors((prevState: ErrorsProps[]) => prevState.filter(
        (error: {field: string}) => error.field !== "name"
      ))
    }
  }

  function handleEmailChange(event: any) {
    setEmailValue(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(error => error.field === "email")

      if(errorAlreadyExists){
        return
      }

      setErrors((prevState: ErrorsProps[]) => [
        ...prevState,
        { field: "email", message: "Digite um E-mail válido."}
      ])

    } else {
      setErrors((prevState: ErrorsProps[]) => prevState.filter(
        (error: {field: string}) => error.field !== "email"
      ))
    }
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.field === fieldName)?.message
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
          error={getErrorMessageByFieldName("email") ? true : false}
          placeholder="E-mail"
          value={emailValue}
          onChange={handleEmailChange}
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

import Button from "../Button"
import { FormGroup } from "../FormGroup"
import Input from "../Input"
import Select from "../Select"
import { Form } from "./styles"

export function ContactForm({ buttonLabel }: any) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>

      <Button type="submit">
        {buttonLabel}
      </Button>
    </Form>
  )
}

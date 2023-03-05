import { useState } from "react"

interface ErrorsProps {
  field: string
  message: string
}

export function useErrors() {

  const [errors, setErrors] = useState<ErrorsProps[]>([])

  function setError({ field, message}: {field: string, message: string}) {
    const errorAlreadyExists = errors.find(error => error.field === field)

    if (errorAlreadyExists){
      return
    }

    setErrors((prevState: ErrorsProps[]) => [
      ...prevState,
      { field, message }
    ])
  }

  function removeError(fieldName: string) {
    setErrors((prevState: ErrorsProps[]) => prevState.filter(
      (error: {field: string}) => error.field !== fieldName
    ))
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.field === fieldName)?.message
  }

  return { setError, removeError, getErrorMessageByFieldName }
}

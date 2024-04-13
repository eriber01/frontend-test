import { FormEvent, useState } from "react"
import { api, manageErrors, onSaveSession } from "../../../utils"
import { useNavigate } from "react-router-dom"

interface RegisterStateI {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  verify_password: string,
  default_company: string
  error?: string[] | null
}

const INITIAL_STATE: RegisterStateI = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  verify_password: '',
  default_company: '',
  error: null
}

export const useActions = () => {
  const [state, setState] = useState(INITIAL_STATE)
  const navigate = useNavigate()

  const onChange = (path: string, value: string | null | string[]) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  const registerAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload: RegisterStateI = {
      firstname: state.firstname,
      lastname: state.lastname,
      default_company: state.default_company,
      email: state.email,
      password: state.password,
      verify_password: state.verify_password
    }

    try {

      onChange('error', null)

      const { data } = await api.post('users', payload)
      onSaveSession(data.session)

      navigate('/users-list')

    } catch (error: unknown) {
      onChange('error', manageErrors(error))
    }
  }

  return { state, onChange, registerAction }
}
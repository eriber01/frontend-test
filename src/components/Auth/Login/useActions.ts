import { FormEvent, useState } from "react";
import { api, manageErrors, onSaveSession } from "../../../utils";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface LoginStateI {
  email: string
  password: string
  error?: string[] | null
}

const INITIAL_STATE: LoginStateI = {
  email: '',
  password: '',
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

  const loginAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload = {
      email: state.email,
      password: state.password
    }

    try {

      onChange('error', null)

      const { data } = await api.post('auth', payload)
      onSaveSession(data)

      navigate('/users-list')

    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        onChange('error', manageErrors(error))
      }
    }
  }

  return { state, setState, onChange, loginAction }
}
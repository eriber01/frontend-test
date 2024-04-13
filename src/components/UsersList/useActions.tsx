import { useEffect, useState } from "react"
import { /* Session,  */api, manageErrors, onGetSession } from "../../utils"
import { useNavigate } from "react-router-dom"
import { StateI, UsersI } from "./interfaces"



const INITIAL_STATE: StateI = {
  users: [],
  error: null
}

export const useActions = () => {
  const [state, setState] = useState(INITIAL_STATE)
  const navigate = useNavigate()

  useEffect(() => {
    const session = onGetSession()

    if (!session?.token) {
      navigate('/')
      return
    }

    const getUsers = async () => {
      try {
        const { data } = await api.get<UsersI[]>('users', { headers: { Authorization: session?.token } })
        setState({ users: data })
      } catch (error: unknown) {
        setState(prev => ({
          ...prev,
          error: manageErrors(error)
        }))
      }

    }

    getUsers()

  }, [navigate])

  return { state, setState }
}
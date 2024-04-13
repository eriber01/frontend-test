import { ErrorMessage } from "../ErrorMessage";
import { Nav } from "../Nav/Index"
import { UsersTable } from "./components/UsersTable";
import { useActions } from "./useActions"

export const UsersList = () => {
  const { state } = useActions()
  return (
    <div>
      <Nav isUsersList={true} />
      <UsersTable items={state.users} />
      <ErrorMessage error={state.error || []} />
    </div>
  )
}
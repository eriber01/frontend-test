import { Link } from "react-router-dom"
import { Inputs } from "../components/Inputs"
import { useActions } from "./useActions"
import { ErrorMessage } from "../../ErrorMessage"
import { Nav } from "../../Nav/Index"

export const Login = () => {
  const { state, onChange, loginAction } = useActions()
  return (
    <>
      <Nav />
      <div
        className="d-flex justify-content-center align-items-center bg-light-subtle"
        style={{ height: '90vh' }}
      >
        <form
          onSubmit={(e) => loginAction(e)}
          className="border p-4 rounded bg-white shadow"
          style={{
            width: '350px'
          }}
        >
          <div className="text-center mb-4">
            <h2>Login</h2>
          </div>
          <Inputs
            onChange={onChange}
            value={state.email}
            id="email"
            label="Email"
            placeholder="example@provider.test"
            type="email"
          />
          <Inputs
            onChange={onChange}
            value={state.password}
            id="password"
            label="Password"
            placeholder="***********"
            type="password"
          />
          <div className="text-center my-4">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-end">
            <Link to={'/register'}>
              Not Have a user ?
            </Link>
          </div>
          <ErrorMessage error={state.error || []} />
        </form>
      </div>
    </>
  )
}

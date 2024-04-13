import { Link } from "react-router-dom"
import { Inputs } from "../components/Inputs"
import { useActions } from "./useActions"
import { ErrorMessage } from "../../ErrorMessage"
import { Nav } from "../../Nav/Index"

export const Register = () => {
  const { state, onChange, registerAction } = useActions()

  return (
    <>
      <Nav />
      <div
        className="d-flex justify-content-center align-items-center bg-light-subtle my-3"
        style={{ height: '100vh' }}
      >
        <form
          onSubmit={(e) => registerAction(e)}
          className="border p-4 rounded bg-white shadow"
          style={{
            width: '350px'
          }}
        >
          <div className="text-center mb-4">
            <h2>Register</h2>
          </div>
          <Inputs
            onChange={onChange}
            value={state.firstname}
            id="firstname"
            label="First name"
            placeholder="Harry"
            type="text"
          />
          <Inputs
            onChange={onChange}
            value={state.lastname}
            id="lastname"
            label="Last name"
            placeholder="Potter"
            type="text"
          />
          <Inputs
            onChange={onChange}
            value={state.default_company}
            id="default_company"
            label="Company"
            placeholder="A company name"
            type="text"
          />
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
          <Inputs
            onChange={onChange}
            value={state.verify_password}
            id="verify_password"
            label="Verify Password"
            placeholder="***********"
            type="password"
          />
          <div className="text-center my-4">
            <button
              className="btn btn-primary"
              type="submit"
            // onClick={(e) => loginAction}
            >
              Register
            </button>
          </div>
          <div className="text-end">
            <Link to={'/login'}>
              Have a user ?
            </Link>
          </div>
          <ErrorMessage error={state.error || []} />
        </form>
      </div>
    </>
  )
}

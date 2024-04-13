import './style.css'
import { Links } from "./components/Links"

export const Nav = ({ isUsersList }: { isUsersList?: boolean }) => {
  return (
    <nav className='bg-info py-1'>
      <ul className="nav justify-content-between">
        <div className="d-flex align-items-center ms-3">
          <li>
            <Links text="Home" to="/" />
          </li>
        </div>
        {
          isUsersList ? null :
            <div className="nav pe-4 w-auto justify-content-between">
              <li className="">
                <Links text="Login" to="/login" />
              </li>
              <li>
                <Links text='Register' to='/register' />
              </li>
              <li>
                <Links text='User List' to='/users-list' />
              </li>
            </div>
        }
      </ul>
    </nav>
  )
}

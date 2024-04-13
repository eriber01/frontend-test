import { Link } from "react-router-dom"
import { LinkI } from "../interfaces"


export const Links = ({ text, to }: LinkI) => {
  return (
    <Link to={to} className={`nav-link text-white ${to === '/' && 'border p-0 px-2 rounded-1'}`}>
      {text}
    </Link>
  )
}

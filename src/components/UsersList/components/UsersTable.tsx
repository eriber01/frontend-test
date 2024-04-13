import { UsersI } from "../interfaces"

interface Props {
  items: UsersI[]
}

export const UsersTable = ({ items }: Props) => {
  return (
    <div className="mt-4">
      <table className="table table-dark table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th className="col text-center"></th>
            <th className="col text-center">First name</th>
            <th className="col text-center">Last name</th>
            <th className="col text-center">Email</th>
            <th className="col text-center">Registered</th>
            <th className="col text-center">Updated At</th>
          </tr>
        </thead>
        <tbody /* className="table-group-divider" */>
          {
            items.map((item, index) => (
              <tr className="text-center" key={index}>
                <td
                  style={{ width: '5%' }}
                >
                  <img
                    className="rounded-circle"
                    style={{ width: '60%' }}
                    src={item.photo.url}
                    alt="User Photo"
                  />
                </td>
                <td>
                  {item.firstname}
                </td>
                <td>
                  {item.lastname}
                </td>
                <td>
                  {item.email}
                </td>
                <td>
                  {item.registered}
                </td>
                <td>
                  {item.updated_at}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

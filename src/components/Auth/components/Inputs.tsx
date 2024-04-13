import { InputsI } from "../interfaces"

export const Inputs = ({ id, label, placeholder, type, value, onChange }: InputsI) => {
  return (
    <div className="mb-2">
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        className="form-control"
        id={id}
        type={type}
        value={value}
        onChange={({ target: { value } }) => onChange(id, value.trim())}
        required
      />
    </div>
  )
}

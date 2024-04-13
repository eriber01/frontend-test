export interface InputsI {
  id: string
  label: string
  type: 'text' | 'email' | 'password'
  placeholder: string
  value: string
  onChange: (path: string, value: string) => void
}
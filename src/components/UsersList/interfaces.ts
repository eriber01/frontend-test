interface Photo {
  url: string
}

export interface UsersI {
  id: number
  firstname: string
  lastname: string
  email: string
  photo: Photo
  default_company: string
  registered: string
  updated_at: string
}

export interface StateI {
  users: UsersI[]
  error?: string[] | null
}
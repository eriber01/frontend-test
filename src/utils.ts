import axios, { AxiosError } from "axios";

export const api = axios.create({ baseURL: 'https://apidev.kanvas.dev/v2/' })

export interface Session {
  token: string;
  refresh_token: string;
  time: string;
  expires: string;
  refresh_token_expires: string;
  id: number;
  timezone: string;
}

export const onSaveSession = (session: Session) => {
  sessionStorage.setItem('session', JSON.stringify(session))
}

export const onGetSession = (): Session => {
  const session = sessionStorage.getItem('session')
  return session ? JSON.parse(session) : null
}

export const manageErrors = (error: unknown): string[] => {
  const errorsArr: string[] = []
  if (error instanceof AxiosError) {
    const arr = Array(error?.response?.data?.errors?.data)

    if (!arr[0].length) {
      return [error?.response?.data?.errors?.message]
    }

    for (const iterator of arr) {
      for (const iterator2 of iterator) {
        for (const key in iterator2) {
          if (Object.prototype.hasOwnProperty.call(iterator2, key)) {
            const element = iterator2[key];
            errorsArr.push(element[0])
          }
        }
      }
    }

  }

  return errorsArr
}
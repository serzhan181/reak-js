import axios, { Method, AxiosError } from 'axios'

export async function makeRequest<T, E = AxiosError>(
  url: string,
  method: Method = 'GET'
) {
  let response: { data: T | null; error: E | null } = {
    data: null,
    error: null,
  }

  try {
    const res = await axios({ method, url })

    response = { ...response, ...res }
  } catch (error) {
    response = { data: null, error }
  }

  return response
}

// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

// TODO: add retry-ability
export async function client<T>(endpoint: string, requestOptions: RequestInit = {}): Promise<T> {
  const { body, ...customConfig } = requestOptions
  const headers = { 'Content-Type': 'application/json' }

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json() as T
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

export function clientGet<T>(endpoint: string, requestOptions: RequestInit = {}): Promise<T> {
  return client<T>(endpoint, { ...requestOptions, method: 'GET' })
}

export function clientPost<T>(endpoint: string, requestOptions: RequestInit = {}): Promise<T> {
  const { body, ...customConfig } = requestOptions

  return client<T>(endpoint, { ...customConfig, body })
}

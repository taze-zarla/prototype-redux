// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

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

client.get = function<T>(endpoint: string, requestOptions: RequestInit = {}): Promise<T> {
  return client<T>(endpoint, { ...requestOptions, method: 'GET' })
}

client.post = function<T>(endpoint: string, requestOptions: RequestInit = {}): Promise<T> {
  const { body, ...customConfig } = requestOptions

  return client<T>(endpoint, { ...customConfig, body })
}

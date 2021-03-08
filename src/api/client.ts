// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

interface ApiClientService {
  abort(): void,
  execute<T>(endpoint: string, requestOptions: RequestInit): Promise<T>
}

// TODO: add retry-ability
export class ApiClient implements ApiClientService {
  controller: AbortController

  constructor() {
    this.controller = new AbortController()
  }

  abort() {
    this.controller.abort()
  }

  async execute<T>(endpoint: string, requestOptions: RequestInit = {}): Promise<T> {
    const { body, ...customConfig } = requestOptions
    const headers = { 'Content-Type': 'application/json' }

    const config: RequestInit = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
      signal: this.controller.signal
    }

    if (body) {
      config.body = JSON.stringify(body)
    }

    let data
    try {
      const response = await window.fetch(endpoint, config)

      console.log('api response: ', response)

      if (response.ok) {
        data = await response.json() as T
        return data
      }

      throw new Error(response.statusText)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
  }
}
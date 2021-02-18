import { createServer } from 'miragejs'

import { Color } from '../features/colors/colorsSlice'

const defaultColorsArr: Color[] = [
  {
    id: '#ff0000',
    hex: '#ff0000',
    name: 'red',
    selected: false
  },
  {
    id: '#00ff00',
    hex: '#00ff00',
    name: 'green',
    selected: false
  },
  {
    id: '#0000ff',
    hex: '#0000ff',
    name: 'blue',
    selected: false
  },
]

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,
    routes() {
      this.namespace = 'fakeApi'

      this.get('/colors', () => {
        return {
          colors: defaultColorsArr
        }
      })
    }
  })
}
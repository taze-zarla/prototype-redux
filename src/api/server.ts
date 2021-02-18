import { createServer } from 'miragejs'
import { randomHexColor } from '../commons/randomHexColor'

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
      this.timing = 1000

      this.get('/colors/:keywords', (schema, req) => {
        const keywords = req.params.keywords

        if (!keywords || keywords === 'default') {
          return {
            colors: defaultColorsArr
          }
        }

        const length = keywords.length
        let randomColors: Color[] = []

        for (let i = 0; i < length; i++) {
          const randomHex = randomHexColor()
          randomColors.push({
            id: randomHex,
            hex: randomHex,
            name: randomHex,
            selected: false
          })
        }

        return {
          colors: randomColors
        }
      })
    }
  })
}
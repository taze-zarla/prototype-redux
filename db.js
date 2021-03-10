module.exports = () => {
  function randomHexColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  }

  const data = {
    colors: {
      colors: []
    },
    numbers: [1, 2, 3, 4, 5]
  }
  // Create 200 random Colors[]

  for (let i = 0; i < 200; i++) {
    const randomHex = randomHexColor()

    data.colors.colors.push({
      id: `${randomHex}${Math.random()}`,
      hex: randomHex,
      name: randomHex,
      selected: false
    })
  }

  return data
}
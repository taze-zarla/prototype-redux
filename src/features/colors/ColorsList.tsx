import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectColors, toggleColorSelected } from './colorsSlice'

export const ColorsList = () => {
  const colors = useSelector(selectColors)

  const dispatch = useDispatch()

  const renderedColors = colors.colors.map(color => (
    <div
      className="color-wrapper pl-5"
      key={color.id}
      style={{userSelect: 'none'}}
    >
      <span
        className="color"
        style={{
          backgroundColor: color.hex,
          cursor: 'pointer'
        }}
        onClick={() => dispatch(toggleColorSelected(color))}
      >
        {color.name}
      </span>
      <span>&lt;= {color.selected ? 'active' : 'not active'}</span>
    </div>
  ))

  return (
    <section className="colors-list">
      <h2>Colors!</h2>
      {renderedColors}
    </section>
  )
}
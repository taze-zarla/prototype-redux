import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchColors, selectColors, selectColorsStatus, toggleColorSelected } from './colorsSlice'

export const ColorsList = () => {
  const colors = useSelector(selectColors)
  const colorsStatus = useSelector(selectColorsStatus)

  const dispatch = useDispatch()

  useEffect(() => {
    if (colorsStatus === 'idle') {
      dispatch(fetchColors('default'))
    }
  }, [colorsStatus, dispatch])

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
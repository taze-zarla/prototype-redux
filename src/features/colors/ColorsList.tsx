import React, { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '../../app/store'

import { fetchColors, toggleColorSelected } from './colorsSlice'

export const ColorsList = () => {
  const colors = useTypedSelector(state => state.colors)
  const colorsStatus = useTypedSelector(state => state.colors.status)

  const dispatch = useAppDispatch()

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
      <p>status of fetchColors: {colorsStatus}</p>
      {renderedColors}
    </section>
  )
}
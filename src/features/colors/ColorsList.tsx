import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../app/store'

import { fetchColors, toggleColorSelected } from './colorsSlice'

export const ColorsList = () => {
  const colors = useTypedSelector(state => state.colors)
  const colorsStatus = useTypedSelector(state => state.colors.status)

  const dispatch = useDispatch()

  useEffect(() => {
    if (colorsStatus === 'idle') {
      dispatch(fetchColors('default'))
    }
  }, [colorsStatus, dispatch])

  const renderedColors = colors.colors.map(color => (
    <div
      className="color-wrapper"
      key={color.id}
      style={{
        width: '100px',
        height: '100px',
        userSelect: 'none'
      }}
    >
      <div
        className="color"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: color.hex,
          cursor: 'pointer',
          outline: color.selected ? `5px green solid` : 'none'
        }}
        onClick={() => dispatch(toggleColorSelected(color))}
      >
        {color.name}
      </div>
    </div>
  ))

  return (
    <section className="colors-list">
      <h2>Colors!</h2>
      <p>status of fetchColors: {colorsStatus}</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {renderedColors}
      </div>
    </section>
  )
}
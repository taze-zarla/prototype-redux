import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../app/store'
import { colorsRequested, colorToggled } from '../../commons/actions'

export const ColorsList = () => {
  const colors = useTypedSelector(state => state.colors)
  const colorsStatus = useTypedSelector(state => state.colors.status)

  const dispatch = useDispatch()

  useEffect(() => {
    if (colorsStatus === 'idle') {
      dispatch(colorsRequested('default'))
    }
  }, [colorsStatus, dispatch])

  const renderedColors = colors.colors.map(color => (
    <div
      key={color.id}
      className="color-wrapper"
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
        onClick={() => dispatch(colorToggled(color))}
      >
        {color.name}
      </div>
    </div>
  ))

  return (
    <section className="colors-list">
      <h2>Colors!</h2>
      <p>status of asyncFetchColors: {colorsStatus}</p>
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
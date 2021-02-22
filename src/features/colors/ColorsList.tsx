import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionFetchColors } from '../../app/sagas'
import { useTypedSelector } from '../../app/store'
import { toggleColorSelected } from './colorsSlice'

export const ColorsList = () => {
  const colors = useTypedSelector(state => state.colors)
  const colorsStatus = useTypedSelector(state => state.colors.status)

  const dispatch = useDispatch()

  useEffect(() => {
    if (colorsStatus === 'idle') {
      dispatch(actionFetchColors('default'))
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
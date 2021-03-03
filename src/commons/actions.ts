import { createAction } from '@reduxjs/toolkit'
import { Color } from '../features/colors/colorsReducer'

export type ActionType =
  | 'COLOR_TOGGLED'
  | 'COLORS_REQUESTED'
  | 'COLORS_RECEIVED'
  | 'COLORS_REQUEST_FAILED'

/**
 * Colors actions [Synchronous-related]
 */
export const colorToggled = createAction<Color, ActionType>('COLOR_TOGGLED')

/**
 * Colors actions [Asynchronous/Saga-related]
 */
export const colorsRequested = createAction<string, ActionType>('COLORS_REQUESTED')
export const colorsReceived = createAction<Color[], ActionType>('COLORS_RECEIVED')
export const colorsRequestFailed = createAction<string, ActionType>('COLORS_REQUEST_FAILED')
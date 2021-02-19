import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce/lib'
import { actionAsyncAddColor } from '../../app/sagas'
import { fetchColors } from './colorsSlice'

export const SearchForm = () => {
  const [keywords, setKeywords] = useState<string>('')

  const dispatch = useDispatch()

  const debouncedDispatch = useDebouncedCallback(dispatch, 500)

  const onKeywordsChanged = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value
    setKeywords(term)
    dispatch(actionAsyncAddColor())

    if (term && false) {
      debouncedDispatch.callback(fetchColors(term))
    }
  }

  return <div>
    <div>============</div>
    <div>Search Colors</div>
    <input
      aria-label="Enter search keywords"
      value={keywords}
      onChange={onKeywordsChanged}
    />
  </div>
}
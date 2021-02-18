import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce/lib'
import { fetchDefaultColors } from './colorsSlice'
// import { addRandomColor } from './colorsSlice'

export const SearchForm = () => {
  const [keywords, setKeywords] = useState<string>('')

  const dispatch = useDispatch()

  const debouncedDispatch = useDebouncedCallback(dispatch, 500)

  const onKeywordsChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setKeywords(e.currentTarget.value)
    // debouncedDispatch.callback(addRandomColor())
    debouncedDispatch.callback(fetchDefaultColors())
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
import React, { useState } from 'react'
import { useAppDispatch } from '../../app/store'
import { useDebouncedCallback } from 'use-debounce/lib'
import { fetchColors } from './colorsSlice'
import { addRandomColor } from './colorsSlice'

export const SearchForm = () => {
  const [keywords, setKeywords] = useState<string>('')

  const dispatch = useAppDispatch()

  const debouncedDispatch = useDebouncedCallback(dispatch, 500)

  const onKeywordsChanged = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value
    setKeywords(term)
    debouncedDispatch.callback(addRandomColor())
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
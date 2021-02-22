import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce/lib'
import { actionFetchColors } from '../../app/sagas'

export const SearchForm = () => {
  const [keywords, setKeywords] = useState<string>('')

  const dispatch = useDispatch()

  const debouncedDispatch = useDebouncedCallback(dispatch, 500)

  const onKeywordsChanged = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value
    setKeywords(term)

    if (term) {
      debouncedDispatch.callback(actionFetchColors(term))
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
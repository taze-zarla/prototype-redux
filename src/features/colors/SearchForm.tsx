import React, { useEffect, useState } from 'react'
import { useAppDispatch, useTypedSelector } from '../../app/store'
import { useDebouncedCallback } from 'use-debounce/lib'
import { fetchColors } from './colorsSlice'
// import { addRandomColor } from './colorsSlice'

export const SearchForm = () => {
  const colorsStatus = useTypedSelector(state => state.colors.status)

  const [keywords, setKeywords] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const debouncedDispatch = useDebouncedCallback(dispatch, 500)

  const onKeywordsChanged = (e: React.FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value
    setKeywords(term)
    setDirty(true)
    // debouncedDispatch.callback(addRandomColor())
    if (term) {
      debouncedDispatch.callback(fetchColors(term))
    }
  }

  useEffect(() => {
    if (dirty && colorsStatus !== 'fetching' && keywords) {
      dispatch(fetchColors(keywords))
    }

    if (colorsStatus === 'succeeded' || colorsStatus === 'failed') {
      setDirty(false)
    }
  }, [dirty, colorsStatus, keywords, dispatch])

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
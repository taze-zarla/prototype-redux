import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from './postsSlice'


export const AddPostForm = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const dispatch = useDispatch()

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value)

  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setContent(e.currentTarget.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content)
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// temp for getting set up
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '../Posts/postsSlice'

const PostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setTitle(event.target.value)
  const onContentChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setContent(event.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
          topics: ['from the form'],
          createdBy: 'the_form',
          createdAt: Date.now(),
        })
      )
    }
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
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

export default PostForm

import React, { useState } from 'react'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setTitle(event.target.value)
  const onContentChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setContent(event.target.value)

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
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}

export default PostForm

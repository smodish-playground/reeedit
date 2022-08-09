import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import { postAdded } from '../../features/posts/postsSlice'
import { selectAllUsers } from '../../features/users/usersSlice'

import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  Box,
} from '@chakra-ui/react'

const PostForm = () => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useAppSelector(selectAllUsers)

  const onTitleChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setTitle(event.target.value)
  const onContentChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setContent(event.target.value)
  const onAuthorChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setUserId(event.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
      setUserId('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map((user: { id: string; name: string }) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <Box>
      <h2>Add a new post</h2>
      <FormControl>
        <FormLabel>Author:</FormLabel>
        <Select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="postTitle">Post Title:</FormLabel>
        <Input
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="postContent">Content:</FormLabel>
        <Textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </FormControl>
      <Button type="button" onClick={onSavePostClicked} disabled={!canSave}>
        Save Post
      </Button>
    </Box>
  )
}

export default PostForm

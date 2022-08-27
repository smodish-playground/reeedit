import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import { addNewPost } from '../../features/posts/postsSlice'
import { selectAllUsers } from '../../features/users/usersSlice'

import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  Flex,
} from '@chakra-ui/react'

const PostForm = () => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useAppSelector(selectAllUsers)

  const onTitleChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setTitle(event.target.value)
  const onBodyChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setBody(event.target.value)
  const onAuthorChanged = (event: {
    target: { value: React.SetStateAction<string> }
  }) => setUserId(event.target.value)

  const canSave =
    [title, body, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        dispatch(addNewPost({ title, body, createdBy: userId })).unwrap()
        setTitle('')
        setBody('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  const userOptions = users.map((user: { id: string; name: string }) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <Flex w="full" direction="column" gap="2" mb="4">
      <Heading as="h2">Add a new post</Heading>
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
        <FormLabel htmlFor="postBody">Body:</FormLabel>
        <Textarea
          id="postBody"
          name="postBody"
          value={body}
          onChange={onBodyChanged}
        />
      </FormControl>
      <Button type="button" onClick={onSavePostClicked} disabled={!canSave}>
        Save Post
      </Button>
    </Flex>
  )
}

export default PostForm

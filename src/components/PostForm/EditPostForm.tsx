import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  deletePost,
  selectPostById,
  updatePost,
} from '../../features/posts/postsSlice'

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
import { RootState } from '../../store/store'
import { PostInterface } from '../Post/Post.interface'

const EditPostForm = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const post = useAppSelector((state: RootState) =>
    selectPostById(state, String(postId))
  )
  const users = useAppSelector(selectAllUsers)

  const dispatch = useAppDispatch()

  const [title, setTitle] = useState(post?.title || '')
  const [body, setBody] = useState(post?.body || '')
  const [userId, setUserId] = useState(post?.createdBy || '')
  const [requestStatus, setRequestStatus] = useState('idle')

  if (!post) {
    return <h2>Post Not Found!</h2>
  }

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
    [title, body, userId].every(Boolean) && requestStatus === 'idle'

  const onUpdatePostClicked = () => {
    if (canSave) {
      const updatedPost: PostInterface = {
        ...post,
        title: title,
        body: body,
        createdBy: userId,
        lastUpdated: Date.now(),
      }

      try {
        setRequestStatus('pending')
        dispatch(updatePost(updatedPost)).unwrap()

        setTitle('')
        setBody('')
        setUserId('')
        navigate(`/post/${postId}`)
      } catch (err) {
        console.error('Failed to update the post', err)
      } finally {
        setRequestStatus('idle')
      }
    }
  }

  const onDeletePostClicked = () => {
    try {
      setRequestStatus('pending')
      dispatch(deletePost({ id: post.id })).unwrap()
    } catch (err: any) {
      console.error('Failed to delete the post')
    } finally {
      setRequestStatus('idle')
    }
  }

  const userOptions = users.map((user: { id: string; name: string }) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <Flex w="full" direction="column" gap="2">
      <Heading as="h2">Edit post</Heading>
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
          rows={15}
        />
      </FormControl>
      <Button type="button" onClick={onUpdatePostClicked} disabled={!canSave}>
        Update Post
      </Button>
      <Button type="button" onClick={onDeletePostClicked}>
        Delete Post
      </Button>
    </Flex>
  )
}

export default EditPostForm

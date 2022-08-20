import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from '../postsSlice'
import Post from '../../../components/Post/Post'
import PostForm from '../../../components/PostForm/PostForm'

import { VStack } from '@chakra-ui/react'

const Posts = () => {
  const dispatch = useAppDispatch()

  const posts = useAppSelector(selectAllPosts)
  const postsStatus = useAppSelector(getPostsStatus)
  const error = useAppSelector(getPostsError)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  })

  const orderPosts = posts.slice().sort((a, b) => b.createdAt - a.createdAt)

  if (error) {
    return <>{error}</>
  }

  return (
    <VStack alignItems="flex-start">
      <PostForm />
      {orderPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </VStack>
  )
}

export default Posts

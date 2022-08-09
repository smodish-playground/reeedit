import React from 'react'
// import { useSelector } from 'react-redux'
import { useAppSelector } from '../../../store/hooks'
import { selectAllPosts } from '../postsSlice'
import Post from '../../../components/Post/Post'
import PostForm from '../../../components/PostForm/PostForm'

import { VStack } from '@chakra-ui/react'

const Posts = () => {
  const posts = useAppSelector(selectAllPosts)

  return (
    <VStack alignItems="flex-start">
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </VStack>
  )
}

export default Posts

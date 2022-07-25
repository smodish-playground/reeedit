import { VStack } from '@chakra-ui/react'
import React from 'react'
import Post from './Post/Post'
import { IPost } from './Post/Post.interface'

const Posts = () => {
  const mockPosts: IPost[] = [
    {
      id: 'afcawfu349814t3nkijd',
      postTitle: 'The first fake post',
      postBody:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum, dolorem placeat, enim hic dolore dicta eum possimus, mollitia ullam sunt labore voluptates totam. Expedita facere repellat ad placeat.',
      createdAt: Date.now(),
      topics: ['development', 'css'],
      createdBy: 'userId1',
    },
    {
      id: 'vbwevhibsdvlfjkrnbgv',
      postTitle: 'The SECOND fake post',
      postBody:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum, dolorem placeat, enim hic dolore dicta eum possimus, mollitia ullam sunt labore voluptates totam. Expedita facere repellat ad placeat.',
      createdAt: Date.now(),
      topics: ['bonsai'],
      createdBy: 'userId2',
    },
    {
      id: 'bqkuajyhbvcodvvfbhdf',
      postTitle: 'YA fake post!!',
      postBody:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum, dolorem placeat, enim hic dolore dicta eum possimus, mollitia ullam sunt labore voluptates totam. Expedita facere repellat ad placeat.',
      createdAt: Date.now(),
      topics: ['development', 'css', 'chakraui'],
      createdBy: 'userId1',
    },
  ]

  return (
    <VStack alignItems="flex-start">
      {mockPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </VStack>
  )
}

export default Posts

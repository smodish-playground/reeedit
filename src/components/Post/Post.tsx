import React from 'react'

import { Link } from 'react-router-dom'

import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  TagLabel,
  Tag,
  HStack,
} from '@chakra-ui/react'
import PostAuthor from '../PostAuthor/PostAuthor'
import RelativeDate from '../RelativeDate/RelativeDate'
import { PostInterface } from './Post.interface'

import { useAppDispatch } from '../../store/hooks'
import { upVoteAdded, downVoteAdded } from '../../features/posts/postsSlice'

const Post = (props: PostInterface) => {
  const dispatch = useAppDispatch()

  const { id, votes, title, createdBy, createdAt, body, topics } = props

  if (!id) {
    return <h1>Loading...</h1>
  }

  return (
    <Box
      as="article"
      rounded="md"
      p="5"
      boxShadow="sm"
      border="1px"
      borderColor="gray.200"
      width="6xl"
    >
      <HStack>
        <VStack>
          <Button onClick={() => dispatch(upVoteAdded({ postId: id }))}>
            Up {votes.up}
          </Button>
          <Button onClick={() => dispatch(downVoteAdded({ postId: id }))}>
            Down {votes.down}
          </Button>
        </VStack>
        <Link to={`post/${id}`}>
          <VStack align="left">
            <HStack justifyContent="space-between">
              <Heading as="h2" size="md">
                {title}
              </Heading>
              <ButtonGroup>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </ButtonGroup>
            </HStack>
            <PostAuthor userId={createdBy} />
            <Tag borderRadius="full" w="max-content" px="3" py="1">
              <TagLabel>
                <RelativeDate timestamp={createdAt} />
              </TagLabel>
            </Tag>
            <Text noOfLines={1} size="md">
              {body}
            </Text>
            <Box>
              <ButtonGroup>
                {topics.map((topic) => (
                  <Button
                    size="xs"
                    colorScheme="black"
                    key={topic}
                    variant="outline"
                  >
                    {topic}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          </VStack>
        </Link>
      </HStack>
    </Box>
  )
}

export default Post

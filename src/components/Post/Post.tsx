import React from 'react'

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
import { IPost } from './Post.interface'
import { useDispatch } from 'react-redux'
import { upVoteAdded, downVoteAdded } from '../../features/posts/postsSlice'

const Post = (props: IPost) => {
  const dispatch = useDispatch()

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
          <Button onClick={() => dispatch(upVoteAdded({ postId: props.id }))}>
            Up {props.votes.up}
          </Button>
          <Button onClick={() => dispatch(downVoteAdded({ postId: props.id }))}>
            Down {props.votes.down}
          </Button>
        </VStack>

        <VStack align="left">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              {props.title}
            </Heading>
            <ButtonGroup>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </HStack>
          <PostAuthor userId={props.createdBy} />
          <Tag borderRadius="full" w="max-content" px="3" py="1">
            <TagLabel>
              <RelativeDate timestamp={props.createdAt} />
            </TagLabel>
          </Tag>
          <Text noOfLines={3} size="md">
            {props.content}
          </Text>
          <Box>
            <ButtonGroup>
              {props.topics.map((topic) => (
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
      </HStack>
    </Box>
  )
}

export default Post

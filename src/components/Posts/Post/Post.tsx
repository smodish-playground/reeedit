import React from 'react'
// import { IPost } from './Post.interface'

import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Avatar,
  TagLabel,
  Tag,
} from '@chakra-ui/react'
import { IPost } from './Post.interface'

const Post = ({
  postTitle,
  topics,
  postBody,
  id,
  createdBy,
  createdAt,
}: IPost) => {
  // console.log(id, postTitle, topics, postBody, createdBy, createdAt)

  return (
    <VStack
      align="left"
      rounded="md"
      p="5"
      boxShadow="sm"
      border="1px"
      borderColor="gray.200"
    >
      <Heading as="h2" size="md">
        {postTitle}
      </Heading>
      <Box>
        <Tag size="md" borderRadius="full">
          <Avatar name={createdBy} size="xs" mr="2" />
          <TagLabel>{createdBy}</TagLabel>
        </Tag>
        <Tag size="md" borderRadius="full">
          <TagLabel>{createdAt}</TagLabel>
        </Tag>
      </Box>
      <Text noOfLines={3} size="md">
        {postBody}
      </Text>
      <Box>
        <ButtonGroup>
          {topics.map((topic) => (
            <Button size="xs" colorScheme="black" key={topic} variant="outline">
              {topic}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </VStack>
  )
}

export default Post

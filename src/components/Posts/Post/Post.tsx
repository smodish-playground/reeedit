import React from 'react'

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

const Post = (props: IPost) => {
  return (
    <VStack
      as="article"
      align="left"
      rounded="md"
      p="5"
      boxShadow="sm"
      border="1px"
      borderColor="gray.200"
    >
      <Heading as="h2" size="md">
        {props.title}
      </Heading>
      <Box>
        <Tag size="md" borderRadius="full">
          <Avatar name={props.createdBy} size="xs" mr="2" />
          <TagLabel>{props.createdBy}</TagLabel>
        </Tag>
        <Tag size="md" borderRadius="full">
          <TagLabel>{props.createdAt}</TagLabel>
        </Tag>
      </Box>
      <Text noOfLines={3} size="md">
        {props.content}
      </Text>
      <Box>
        <ButtonGroup>
          {props.topics.map((topic) => (
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

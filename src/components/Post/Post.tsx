import React from 'react'

import { Link } from 'react-router-dom'

import {
  Box,
  Heading,
  Text,
  Button,
  ButtonGroup,
  TagLabel,
  Tag,
  Flex,
  Spacer,
} from '@chakra-ui/react'

import PostAuthor from '../PostAuthor/PostAuthor'
import RelativeDate from '../RelativeDate/RelativeDate'
import Votes from '../Votes/Votes'

import { PostInterface } from './Post.interface'

const Post = (props: PostInterface) => {
  const { id, votes, title, createdBy, createdAt, lastUpdated, body, topics } =
    props

  if (!id) {
    return <h1>Loading...</h1>
  }

  return (
    <Box
      as="article"
      rounded="md"
      p="3"
      boxShadow="sm"
      border="1px"
      borderColor="gray.200"
      w="full"
    >
      <Flex direction="row" gap="3">
        <Votes id={id} votes={votes} />
        <Flex direction="column" align="left" w="full">
          <Flex direction="row">
            <Link to={`post/${id}`}>
              <Heading as="h2" size="md">
                {title}
              </Heading>
            </Link>
            <Spacer />
            <Link to={`/post/edit/${id}`}>
              <Button>Edit</Button>
            </Link>
          </Flex>
          <Flex direction="column" gap="2">
            <PostAuthor userId={createdBy} />
            <Tag borderRadius="full" w="max-content" px="3" py="1">
              <TagLabel>
                <Flex gap="2">
                  <div>
                    Updated:
                    <RelativeDate timestamp={lastUpdated} />
                  </div>
                  <div>
                    Posted:
                    <RelativeDate timestamp={createdAt} />
                  </div>
                </Flex>
              </TagLabel>
            </Tag>
            <Link to={`post/${id}`}>
              <Text noOfLines={1} size="md">
                {body}
              </Text>
            </Link>
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
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Post

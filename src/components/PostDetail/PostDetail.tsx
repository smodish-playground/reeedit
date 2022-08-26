import { useSelector } from 'react-redux'
import { selectPostById } from '../../features/posts/postsSlice'

import { useParams, Link } from 'react-router-dom'
import { RootState } from '../../store/store'

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

import { useAppDispatch } from '../../store/hooks'
import { upVoteAdded, downVoteAdded } from '../../features/posts/postsSlice'

const PostDetail = () => {
  const dispatch = useAppDispatch()
  const { postId } = useParams()
  const post = useSelector((state: RootState) =>
    selectPostById(state, String(postId))
  )

  if (!post) {
    return <h2>Post Not Found!</h2>
  }

  const { id, votes, title, createdBy, createdAt, body, topics } = post

  return (
    <Box>
      <HStack>
        <VStack>
          <Button onClick={() => dispatch(upVoteAdded({ postId: id }))}>
            Up {votes.up}
          </Button>
          <Button onClick={() => dispatch(downVoteAdded({ postId: id }))}>
            Down {votes.down}
          </Button>
        </VStack>
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
          <Text size="md">{body}</Text>
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
      </HStack>
    </Box>
  )
}

export default PostDetail

import React from 'react'

import { VStack, Button } from '@chakra-ui/react'

import { upVoteAdded, downVoteAdded } from '../../features/posts/postsSlice'

import { useAppDispatch } from '../../store/hooks'

const Votes = (props: { id: string; votes: { up: number; down: number } }) => {
  const dispatch = useAppDispatch()

  const { id, votes } = props

  return (
    <VStack align="stretch">
      <Button onClick={() => dispatch(upVoteAdded({ postId: id }))}>
        Up {votes.up}
      </Button>
      <Button onClick={() => dispatch(downVoteAdded({ postId: id }))}>
        Down {votes.down}
      </Button>
    </VStack>
  )
}

export default Votes

import { useSelector } from 'react-redux'
import { selectAllUsers } from '../../features/users/usersSlice'
import { IUser } from './User.interface'

import { Avatar, Tag, TagLabel } from '@chakra-ui/react'

const PostAuthor = (props: { userId: string }) => {
  const users: IUser[] = useSelector(selectAllUsers)

  const author = users.find((user) => user.id === props.userId) || {
    id: '99',
    name: 'Unknown user',
  }

  // < span > by { author ?author.name: 'Unknown Author'}</span>

  return (
    <Tag size="md" borderRadius="full">
      {/* eventually will be link to profile pic */}
      <Avatar name={author.name} size="xs" mr="2" />
      <TagLabel>{author.name}</TagLabel>
    </Tag>
  )
}

export default PostAuthor

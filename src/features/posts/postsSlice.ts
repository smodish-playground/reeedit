import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { IPost } from '../../components/Post/Post.interface'

import data from '../../mockdb/db'

const initialState = data.posts

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      prepare: (title: string, content: string, userId: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            topics: ['from redux prepare'],
            createdAt: Date.now(),
            createdBy: userId,
            votes: {
              up: 0,
              down: 0,
            },
          },
        }
      },
      reducer: (state, action: PayloadAction<IPost>) => {
        // add a post to state
        state.push(action.payload)
      },
    },
    upVoteAdded(state, action) {
      const { postId } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.votes.up++
      }
    },
    downVoteAdded(state, action) {
      const { postId } = action.payload
      const existingPost = state.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.votes.down++
      }
    },
  },
})

export const { postAdded, upVoteAdded, downVoteAdded } = postsSlice.actions

export const selectAllPosts = (state: { posts: IPost[] }) => state.posts

export default postsSlice.reducer

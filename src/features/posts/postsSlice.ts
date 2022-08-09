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
          },
        }
      },
      reducer: (state, action: PayloadAction<IPost>) => {
        // add a post to state
        state.push(action.payload)
      },
    },
    setPosts: (state) => {
      // fetch posts
      return state
    },
    setCurrentPost: (state, action) => {
      // fetch one post
      return state
    },
    updatedPost: (state, action) => {
      // update a post
      return state
    },
    deletedPost: (state, action) => {
      // deletes one post
      return state
    },
  },
})

export const { setPosts, setCurrentPost, postAdded, updatedPost, deletedPost } =
  postsSlice.actions

export const selectAllPosts = (state: { posts: IPost[] }) => state.posts

export default postsSlice.reducer

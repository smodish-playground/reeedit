import axios from 'axios'
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

// import type { IPost } from '../../components/Post/Post.interface'

// interface PostsSliceState {
//   posts: IPost[]
//   status: string
//   error: string
// }

const POSTS_URL = 'http://localhost:9000/posts'
console.log('POSTS_URL: ' + POSTS_URL)

const initialState = {
  posts: [],
  status: 'idle',
  error: '',
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return [...response.data]
  } catch (err) {
    return err
  }
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      prepare: (title, content, userId) => {
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
      reducer: (state, action) => {
        // add a post to state
        state.posts.push(action.payload)
      },
    },
    upVoteAdded(state, action) {
      const postId = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.votes.up++
      }
    },
    downVoteAdded(state, action) {
      const postId = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.votes.down++
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { postAdded, upVoteAdded, downVoteAdded } = postsSlice.actions

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export default postsSlice.reducer

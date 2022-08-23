import { RootState } from './../../store/store'
import { IPost } from './../../components/Post/Post.interface'
import axios from 'axios'
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

interface PostsSliceState {
  posts: IPost[]
  status: string
  error: any
}

const POSTS_URL = 'http://localhost:9000/posts'

interface InitialPost {
  title: string
  body: string
  createdBy: string
}

const initialState: PostsSliceState = {
  posts: [],
  status: 'idle',
  error: '',
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return [...response.data]
  } catch (err: any) {
    return err.message
  }
})

export const addNewPost = createAsyncThunk<IPost, InitialPost>(
  'posts/addNewPost',
  async (initialPost, thunkApi) => {
    try {
      const response = await axios.post(POSTS_URL, initialPost)
      return response.data
    } catch (err: any) {
      return err.message
    }
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      prepare: (post: IPost): any => {
        return {
          payload: {
            id: nanoid(),
            title: post.title,
            body: post.body,
            createdBy: post.createdBy,
            createdAt: Date.now(),
            topics: ['from redux prepare'],
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
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.id = nanoid()
        action.payload.topics = ['from redux thunk']
        action.payload.createdAt = Date.now()
        action.payload.votes = { up: 0, down: 0 }

        console.log(action.payload)
        state.posts.push(action.payload)
      })
  },
})

export const { postAdded, upVoteAdded, downVoteAdded } = postsSlice.actions

export const selectAllPosts = (state: RootState) => state.posts.posts
export const getPostsStatus = (state: RootState) => state.posts.status
export const getPostsError = (state: RootState) => state.posts.error

export default postsSlice.reducer

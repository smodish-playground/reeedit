import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'User number One' },
  { id: '1', name: 'User number Two' },
  { id: '2', name: 'User number Three' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer

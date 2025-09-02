import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { isLoggedIn: false, name: null, email: null },
  reducers: {
    login: (state, { payload: { name, email } }) => { state.isLoggedIn = true; state.name = name; state.email = email },
    logout: (state) => { state.isLoggedIn = false; state.name = null; state.email = null }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    userData : {},
    isLoggedIn: false,
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
      },
    logOut: (state )=>{
    state.isLoggedIn = false;
    state.usersData = {}
    }
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Store user profiles here
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      // Find and update the user in the array based on user ID
      const updatedUser = action.payload;
      const index = state.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    deleteUser: (state, action) => {
      // Find and remove the user from the array based on user ID
      const userId = action.payload;
      const index = state.users.findIndex(user => user.id === userId);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

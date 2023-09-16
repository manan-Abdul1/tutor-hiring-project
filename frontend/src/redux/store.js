import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
// import usersReducer from './usersSlice';
// import teachersReducer from './teachersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // users: usersReducer,
    // teachers: teachersReducer, 
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
// import usersReducer from './usersSlice';
import teachersReducer from './features/teachers/teacherSlice';
import requestReducer from './features/requests/requestSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // users: usersReducer,
    tutor: teachersReducer, 
    requests:requestReducer
  },
});

export default store;

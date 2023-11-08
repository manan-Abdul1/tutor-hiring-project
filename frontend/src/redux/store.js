import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
// import usersReducer from './usersSlice';
import teachersReducer from './features/teachers/teacherSlice';
import requestReducer from './features/requests/requestSlice';
import notificationReducer from './features/notifications/notificationsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const rootReducer = combineReducers({
    auth: authReducer,
    // users: usersReducer,
    tutor: teachersReducer, 
    requests:requestReducer,
    notifications:notificationReducer
});
// export default store;
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
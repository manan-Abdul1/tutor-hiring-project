// notificationsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    // Add a notification
    addNotification: (state, action) => {
      state.notifications = action.payload;
    },
    // Mark a single notification as read
    markNotificationAsRead: (state, action) => {
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification._id === action.payload
      );
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
      }
    },
    // Mark all notifications as read
    markAllNotificationsAsRead: (state) => {
      state.notifications = state.notifications.map((notification) => ({
        ...notification,
        read: true,
      }));
    },
    // Delete a single notification
    deleteNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification._id !== action.payload
      );
    },
    // Delete all notifications
    deleteAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  addNotification,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;

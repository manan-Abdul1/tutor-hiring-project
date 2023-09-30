import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    markNotificationAsRead: (state, action) => {
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification.id === action.payload
      );
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
      }
    },
  },
});

export const { addNotification, markNotificationAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;

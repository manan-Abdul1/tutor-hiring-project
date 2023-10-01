// NotificationPanel.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotification,
  markAllNotificationsAsRead,
  deleteAllNotifications,
} from "../../redux/features/notifications/notificationsSlice";
import axios from "axios";
import NotificationList from "./Notification";

function NotificationPanel() {
  const currentUserId = useSelector((state) => state.auth.userData._id);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/notifications?userId=${currentUserId}`)
      .then((response) => {
        dispatch(addNotification(response.data.notifications));
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  const handleMarkAllAsRead = () => {
    axios
    .post(`http://localhost:5500/api/notifications/mark-all-as-read`, { userId: currentUserId })
    .then((response) => {
        console.log(response,'response')
        dispatch(markAllNotificationsAsRead());
    })
    .catch((error) => {
      console.error("Error fetching notifications:", error);
    });
  };

  const handleDeleteAllNotifications = () => {
    dispatch(deleteAllNotifications());
  };

  return (
    <div className="notification-panel">
      <div className="notification-content">
        <NotificationList />
      </div>
      <div className="notification-actions">
        <button className="mark-as-read-button text-blue-500 hover:text-blue-800 " onClick={handleMarkAllAsRead}>
          Mark All as Read
        </button>
        <button className="delete-button text-red-500 hover:text-red-700" onClick={handleDeleteAllNotifications}>
          Delete All Notifications
        </button>
      </div>
    </div>
  );
}

export default NotificationPanel;

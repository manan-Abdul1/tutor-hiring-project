import React from "react";
import { useSelector } from "react-redux";
import "./Notification.css";

const NotificationList = () => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
console.log(notifications,'notifications')
  return (
    <div className="notification-list">
      {notifications?.length === 0 ? (
        <p className="p-4">No notifications to show.</p>
      ) : (
        notifications?.map((notification) => (
          <div
            key={notification._id}
            className={`notification-item ${
              notification.isRead ? "bg-gray-200 " : "bg-white"
            } mb-2 rounded-md cursor-pointer hover:bg-gray-300`}
          >
            <p
              className={`${
                notification.isRead ? "text-gray-800" : "text-gray-500"
              } cursor-pointer`}
            >
              {notification.message}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;

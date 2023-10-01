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
              notification.read ? "bg-gray-200" : "bg-white"
            } p-4 rounded-md mb-4 cursor-pointer hover:bg-gray-100`}
          >
            <p
              className={`${
                notification.read ? "text-gray-400" : "text-gray-500"
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

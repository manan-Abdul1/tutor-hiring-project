import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Notification.css";
import { useNavigate } from "react-router-dom";
import { markNotificationAsRead } from "../../redux/features/notifications/notificationsSlice";
import axios from "axios";

const NotificationList = () => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const currentUser = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requestId = notifications?.eventDetails?.requestId;
  const handleNotificationClick = async (notification) => {
    console.log(notification._id,'notification')
    if (!notification.isRead) {
      dispatch(markNotificationAsRead(notification._id));
            
      try {
        
        axios
        .put(`http://localhost:5500/api/notifications/mark-read?notificationId=${notification._id}`)
        .then((response) => {
          dispatch(markNotificationAsRead(notification._id));
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
      } catch (error) {
        console.error('Error marking notification as read:', error);
      }
    }
    if (notification.eventType === "new_hiring_request") {
      navigate( "/teacher-requests");
    }
    else if(notification.eventType === "request_accepted"){
      // user-requests
    navigate(`${currentUser.role !== 'tutor' ? '/student-scheduled-meetings' : '/teacher-requests'}`);

    }
    else if(notification.eventType === "request_complete"){
      navigate(`${currentUser.role !== 'tutor' ? '/user-requests/completed' : '/teacher-requests/:completed'}`); 
    }
    else if(notification.eventType === "request_rejected"){
      navigate(
        `${currentUser.role !== 'tutor' ? '/user-requests/rejected' : '/teacher-requests/:rejected'}`
      );
    }
    // navigate(`${currentUser.role !== 'tutor' ? '/student-scheduled-meetings' : '/teacher-requests'}`);
  
  };
  

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
            onClick={() => handleNotificationClick(notification)}
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

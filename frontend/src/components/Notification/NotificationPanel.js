// NotificationPanel.js
import { useDispatch, useSelector } from "react-redux";
import {
  markAllNotificationsAsRead,
  deleteAllNotifications,
} from "../../redux/features/notifications/notificationsSlice";
import axios from "axios";
import NotificationList from "./NotificationList";
import { useEffect } from "react";
import { addRequests } from "../../redux/features/requests/requestSlice";

function NotificationPanel() {
  const currentUser = useSelector((state) => state.auth.userData);
  const currentUserId = currentUser._id;

  const notifications = useSelector(
    (state) => state.notifications.notifications
  )
  useEffect(() => {
    if(currentUser.role==="user"){
      axios
      .get(`http://localhost:5500/api/hiringRequest/getUserRequestsById?id=${currentUser._id}`)
      .then((response) => {
        console.log(response.data.requests,'response')
        dispatch(addRequests(response.data.requests));
      })
      .catch((error) => {
        console.error("Error fetching teacher requests:", error);
      });
    }
    }, []);
    const dispatch = useDispatch();
    
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
    axios
    .delete(`http://localhost:5500/api/notifications/deleteAllNotifications?userId=${currentUserId}`)
    .then((response) => {
        console.log(response,'response')
        dispatch(deleteAllNotifications());
    })
    .catch((error) => {
      console.error("Error fetching notifications:", error);
    });
  };

  return (
    <div className="notification-panel">
      <div className="notification-content">
        <NotificationList />
      </div>
      {
        notifications.length>0 &&
      <div className="notification-actions mt-2">
        <button className="mark-as-read-button text-blue-500 hover:text-blue-800 " onClick={handleMarkAllAsRead}>
          Mark All as Read
        </button>
        <button className="delete-button text-red-500 hover:text-red-700" onClick={handleDeleteAllNotifications}>
          Delete All Notifications
        </button>
      </div>
      }
    </div>
  );
}

export default NotificationPanel;

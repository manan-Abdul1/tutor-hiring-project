// Header.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/features/auth/authSlice";
import NotificationPanel from "../../components/Notification/NotificationPanel";
import TeacherHeader from "./TeacherHeader";
import StudentHeader from "./StudentHeader";
import UserMenu from "./UserMenu";
import MobileMenuButton from "./MobileMenuButton";
import axios from "axios";
import { addNotification } from "../../redux/features/notifications/notificationsSlice";
import { addTeachers } from "../../redux/features/teachers/teacherSlice";


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const location = useLocation();
  const currentUser = useSelector((state) => state.auth.userData);
  const notifications = useSelector((state) => state.notifications.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/notifications?userId=${currentUser._id}`)
      .then((response) => {
        dispatch(addNotification(response.data.notifications));
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);
  useEffect(() => {
    const apiUrl = 'http://localhost:5500/api/tutors/get-all-teachers';
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(addTeachers(response.data.teachers));
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
    });
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link
                to={`${currentUser.role !== "tutor" ? "/home" : "/teacher-home"} `}
                className="flex items-center py-4 px-2"
              >
                <i className="fa-solid fa-user-graduate fa-beat fa-3x text-green-500"></i>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Conditionally render the appropriate header */}
              {currentUser.role === "tutor" ? (
                <TeacherHeader location={location} />
              ) : (
                <StudentHeader location={location} />
              )}
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center ">
            {currentUser.role !== "tutor" && (
              <Link
                to="/tutors"
                className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-blue-400 transition duration-300"
              >
                Hire a Tutor
              </Link>
            )}
            {/* Notification Panel */}
            <div
              className="transition-bg  ml-5 relative"
              onClick={toggleNotifications}
              style={{ zIndex: 9999 }}
            >
              {notifications.some(notification => !notification.isRead) && <div className="absolute bg-red-500 top-0 -right-0 h-2 w-2 rounded-full"></div>}
              <i className="fa-regular cursor-pointer fa-bell fa-lg hover:text-green-500"></i>
              {showNotifications && <NotificationPanel />}
            </div>
            {currentUser && (
              <UserMenu 
                currentUser={currentUser}
                toggleMenu={toggleMenu}
                handleLogout={handleLogout}
                showMenu={showMenu}
              />
            )}
          </div>
          {/* Mobile menu button */}
          <MobileMenuButton
            mobileToggle={mobileToggle}
            setMobileToggle={setMobileToggle}
          />
        </div>
      </div>
      {/* Mobile menu */}
      {isMobile && mobileToggle && (
        <MobileHeader
          showMenu={showMenu}
          handleLogout={handleLogout}
          toggleMenu={toggleMenu}
          currentUser={currentUser}
        />
      )}
    </nav>
  );
}

export default Header;

import React from "react";
import "../style/notification.scss";

const Notification = () => {
  return (
    <div className="notification">
      <div className="circle send-circle">
        <div className="dot red-dot"></div>
        <i class="ri-send-plane-fill"></i>
      </div>
      <div className="circle notf-circle">
        <div className="dot green-dot"></div>
        <i class="ri-notification-3-line"></i>
      </div>
      <i class="ri-menu-fill"></i>
    </div>
  );
};

export default Notification;

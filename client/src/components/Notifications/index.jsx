import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {/* Display notifications to the user */}
      {notifications.map((notification, index) => (
        <div key={index}>{notification.message}</div>
      ))}
    </div>
  );
};

export default Notifications;

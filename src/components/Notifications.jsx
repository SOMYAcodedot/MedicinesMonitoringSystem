import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    'Item #123 failed quality check.',
    'Item #456 passed quality check.',
  ]);

  useEffect(() => {
    const fetchNotifications = async () => {
      setTimeout(() => {
        const newNotifications = [
          ...notifications,
          'Item #789 passed quality check.',
          'Item #321 failed quality check.',
        ];
        setNotifications(newNotifications);
      }, 2000);
    };

    fetchNotifications();
  }, [notifications]);  // Add notifications as a dependency

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
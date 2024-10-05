import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    'Item #123 failed quality check.',
    'Item #456 passed quality check.',
  ]);

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
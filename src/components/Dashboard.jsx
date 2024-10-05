import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Quality Check Dashboard</h2>
      <div className="status-box approved">Approved: 50</div>
      <div className="status-box rejected">Rejected: 10</div>
      <div className="status-box pending">Pending: 10</div>
    </div>
  );
};

export default Dashboard;
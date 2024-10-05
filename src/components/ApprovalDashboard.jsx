import React, { useState } from 'react';

const ApprovalDashboard = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Medicine A', status: 'Flagged', action: null },
    { id: 2, name: 'Medicine B', status: 'Passed', action: 'Approved' },
  ]);

  const handleAction = (id, action) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, action } : item
      )
    );
  };

  return (
    <div className="approval-dashboard">
      <h2>Approval Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                {item.action ? (
                  item.action
                ) : (
                  <>
                    <button onClick={() => handleAction(item.id, 'Approved')}>Approve</button>
                    <button onClick={() => handleAction(item.id, 'Rejected')}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalDashboard;
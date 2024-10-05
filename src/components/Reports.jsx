import React from 'react';

const Reports = () => {
  const reportData = [
    { id: 1, date: '2024-09-15', approved: 120, rejected: 30 },
    { id: 2, date: '2024-09-20', approved: 140, rejected: 10 },
  ];

  return (
    <div className="reports">
      <h2>Quality Check Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Approved Items</th>
            <th>Rejected Items</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.id}>
              <td>{report.date}</td>
              <td>{report.approved}</td>
              <td>{report.rejected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
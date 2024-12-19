import React from 'react';
import Analyze from '../Images/DashboardImages/Analyze.jpg'; // Updated path
import Assessment from '../Images/DashboardImages/Assessment.jpg';
import Digital from '../Images/DashboardImages/digital.jpg';
import Statuscheck from '../Images/DashboardImages/Statuscheck.jpg';

const Dashboard = () => {
  const projectData = [
    {
      id: 1,
      title: 'Analysis Module',
      image: Analyze,
      description:
        'The Analysis Module enables precise evaluation of medicine and consumable quality. It uses advanced automated algorithms to detect anomalies and provide accurate assessments.',
    },
    {
      id: 2,
      title: 'Assessment Module',
      image: Assessment,
      description:
        'This module ensures all supplies meet the hospital’s compliance standards. It automates testing protocols and reduces the chances of human error.',
    },
    {
      id: 3,
      title: 'Digital Monitoring',
      image: Digital,
      description:
        'A real-time monitoring system ensures continuous digital supervision, providing instant updates and notifications for compliance and quality deviations.',
    },
    {
      id: 4,
      title: 'Status Check',
      image: Statuscheck,
      description:
        'The Status Check Module offers a detailed breakdown of approved and rejected supplies. It aids decision-making by providing clear insights.',
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Quality Testing & Monitoring Dashboard</h1>
      <p className="dashboard-subtitle">
        A suite of technological modules to automate the testing, assessment, and monitoring of medicines and consumables 
        for hospitals, ensuring compliance and rejecting low-quality supplies seamlessly.
      </p>

      <div className="dashboard-grid">
        {projectData.map((module) => (
          <div key={module.id} className="dashboard-card">
            <img src={module.image} alt={module.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{module.title}</h3>
              <p className="card-description">{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
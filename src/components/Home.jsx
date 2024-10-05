import React from 'react';
import { Link } from 'react-router-dom';
import autoqualitycheck from '../Images/autoqualitycheck.jpg';
import dashboard from '../Images/dashboard.png';
import mllearn from '../Images/mllearn.jpg';
import realtimedata from '../Images/realtimedata.png';
import useraccess from '../Images/useraccess.png';
import inventory from '../Images/inventory.png';

const features = [
  {
    title: 'Automated quality checks on received supplies',
    img: autoqualitycheck,
    info: 'Implement automated testing protocols that evaluate the quality of incoming supplies using predefined criteria to eliminate low-quality products without manual checks.',
  },
  {
    title: 'Real-time data on approved and rejected items',
    img: realtimedata,
    info: 'Ensure that quality data is synced in real time across all platforms, providing stakeholders with the most current information without delays.',
  },
  {
    title: 'Comprehensive dashboard for monitoring',
    img: dashboard,
    info: 'Provide a comprehensive dashboard that visualizes key metrics, trends, and quality control data, enabling healthcare professionals to monitor the quality of supplies effectively.',
  },
  {
    title: 'User access control and role management',
    img: useraccess,
    info: 'Implement user access control to define different roles within the system, ensuring that only authorized personnel can access sensitive quality data or take action on rejections.',
  },
  {
    title: 'Machine-Learning Algorithms',
    img: mllearn,
    info: 'Utilize machine learning algorithms to improve quality assessment accuracy over time by learning from historical data and adjusting criteria for rejection based on patterns.',
  },
  {
    title: 'Inventory Management Integration',
    img: inventory,
    info: 'Incorporate an inventory management feature that automatically updates stock levels based on quality assessments, ensuring that only approved items are available for use.',
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Quality Monitoring System</h1>
      <p>
        Our platform helps hospitals ensure that medicines and consumables meet quality standards
        with automated testing and monitoring.
      </p>

      {/* Card layout for key features */}
      <section className="card-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.img} alt={feature.title} className="feature-img" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-info">{feature.info}</p>
          </div>
        ))}
      </section>

      <Link to="/login">
        <button className="login-button">Login to Monitor</button>
      </Link>
    </div>
  );
};

export default Home;

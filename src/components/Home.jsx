import React, { useState } from 'react';
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

const faqs = [
  {
    question: 'How does the system ensure compliance with medical and quality standards?',
    answer: 'The system is integrated with up-to-date regulations and quality standards (e.g., FDA, ISO, GMP), using automated testing algorithms and quality benchmarks to assess products in real-time, ensuring compliance before acceptance.',
  },
  {
    question: 'How does the module test the quality of medicines and consumables?',
    answer: 'The system utilizes a combination of automated chemical analysis, spectrometry, physical inspection via image recognition, and machine learning models to detect defects or irregularities.',
  },
  {
    question: 'What happens if a batch of medicines or consumables fails the quality check?',
    answer: 'If a batch fails the quality check, the system automatically rejects it, notifies the relevant stakeholders, and records the details of the rejection for auditing.',
  },
  {
    question: 'Can the system provide real-time updates on the status of received shipments?',
    answer: 'Yes, the system offers real-time monitoring and updates, allowing hospital administrators and procurement teams to track the status of incoming supplies.',
  },
  {
    question: 'What are the benefits of using this system compared to manual quality control?',
    answer: 'The system offers increased accuracy, faster testing, consistent compliance checks, and cost savings by reducing manual labor and minimizing the acceptance of low-quality supplies.',
  },
];

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-card ${openFaqIndex === index ? 'open' : ''}`} onClick={() => toggleFaq(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className={`arrow ${openFaqIndex === index ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
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
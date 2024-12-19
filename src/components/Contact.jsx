import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalEmail: "",
    remark: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="submitted-message show">
          <FaCheckCircle size={40} color="#4CAF50" />
          <p>Thank you! Your form has been submitted!</p>
          <p>Our team will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="hospitalName">Hospital Name:</label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              placeholder="Enter hospital name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hospitalEmail">Hospital Email:</label>
            <input
              type="email"
              id="hospitalEmail"
              name="hospitalEmail"
              value={formData.hospitalEmail}
              onChange={handleChange}
              placeholder="Enter hospital email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="remark">Remark (Optional):</label>
            <textarea
              id="remark"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              placeholder="Any additional information"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit <FaCheckCircle />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
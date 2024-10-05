import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    Hospital_name: "",
    Hospital_email:"",
    medicalIssue: "",
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
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted ? (
        <p className="submitted-message">
          Thank you! Your form has been submitted! Our team will get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="medicalIssue">Medical Issue:</label>
            <textarea
              id="medicalIssue"
              name="medicalIssue"
              value={formData.medicalIssue}
              onChange={handleChange}
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
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit <FaCheck />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
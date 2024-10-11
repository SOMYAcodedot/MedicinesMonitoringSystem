import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

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
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // You can also add form submission logic here (e.g., send data to a server)
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
            <label htmlFor="hospitalName">Hospital Name:</label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
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
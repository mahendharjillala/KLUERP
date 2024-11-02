// Components/StudentForm.js
import React, { useState, useEffect } from 'react';
import './StudentForm.css';

const StudentForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    rollNumber: '',
    name: '',
    dateOfBirth: '',
    gender: '',
    contactInfo: {
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        pincode: ''
      }
    },
    academic: {
      branch: '',
      semester: '',
      batch: '',
      cgpa: ''
    },
    attendance: '',
    parentInfo: {
      fatherName: '',
      motherName: '',
      parentEmail: '',
      parentPhone: ''
    }
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      contactInfo: {
        ...prevData.contactInfo,
        [name]: value
      }
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      contactInfo: {
        ...prevData.contactInfo,
        address: {
          ...prevData.contactInfo.address,
          [name]: value
        }
      }
    }));
  };

  const handleAcademicChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      academic: {
        ...prevData.academic,
        [name]: value
      }
    }));
  };

  const handleParentInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      parentInfo: {
        ...prevData.parentInfo,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="student-form-container">
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Roll Number:</label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Contact Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.contactInfo.email}
                onChange={handleContactInfoChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.contactInfo.phone}
                onChange={handleContactInfoChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={formData.contactInfo.address.street}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.contactInfo.address.city}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.contactInfo.address.state}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={formData.contactInfo.address.pincode}
                onChange={handleAddressChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Academic Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Branch:</label>
              <input
                type="text"
                name="branch"
                value={formData.academic.branch}
                onChange={handleAcademicChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Semester:</label>
              <input
                type="number"
                name="semester"
                value={formData.academic.semester}
                onChange={handleAcademicChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Batch:</label>
              <input
                type="text"
                name="batch"
                value={formData.academic.batch}
                onChange={handleAcademicChange}
                required
              />
            </div>
            <div className="form-group">
              <label>CGPA:</label>
              <input
                type="number"
                step="0.01"
                name="cgpa"
                value={formData.academic.cgpa}
                onChange={handleAcademicChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Parent Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Father's Name:</label>
              <input
                type="text"
                name="fatherName"
                value={formData.parentInfo.fatherName}
                onChange={handleParentInfoChange}
              />
            </div>
            <div className="form-group">
              <label>Mother's Name:</label>
              <input
                type="text"
                name="motherName"
                value={formData.parentInfo.motherName}
                onChange={handleParentInfoChange}
              />
            </div>
            <div className="form-group">
              <label>Parent's Email:</label>
              <input
                type="email"
                name="parentEmail"
                value={formData.parentInfo.parentEmail}
                onChange={handleParentInfoChange}
              />
            </div>
// Components/StudentDetails.js
import React, { useState, useEffect } from 'react';
import './StudentDetails.css';

const StudentDetails = ({ student }) => {
  return (
    <div className="student-details-container">
      <div className="student-profile-header">
        <div className="profile-image">
          <img src={student.profileImage || '/default-avatar.png'} alt="Student" />
        </div>
        <div className="basic-info">
          <h2>{student.name}</h2>
          <p>Roll Number: {student.rollNumber}</p>
          <p>Branch: {student.academic.branch}</p>
          <div className="status-badges">
            <span className="badge badge-primary">Semester {student.academic.semester}</span>
            <span className="badge badge-success">CGPA: {student.academic.cgpa}</span>
            <span className="badge badge-info">Attendance: {student.attendance}%</span>
          </div>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <h3>Personal Information</h3>
          <div className="detail-content">
            <p><strong>Date of Birth:</strong> {new Date(student.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Email:</strong> {student.contactInfo.email}</p>
            <p><strong>Phone:</strong> {student.contactInfo.phone}</p>
          </div>
        </div>

        <div className="detail-card">
          <h3>Academic Information</h3>
          <div className="detail-content">
            <p><strong>Branch:</strong> {student.academic.branch}</p>
            <p><strong>Batch:</strong> {student.academic.batch}</p>
            <p><strong>Current Semester:</strong> {student.academic.semester}</p>
            <p><strong>CGPA:</strong> {student.academic.cgpa}</p>
          </div>
        </div>

        <div className="detail-card">
          <h3>Address Information</h3>
          <div className="detail-content">
            <p><strong>Street:</strong> {student.contactInfo.address.street}</p>
            <p><strong>City:</strong> {student.contactInfo.address.city}</p>
            <p><strong>State:</strong> {student.contactInfo.address.state}</p>
            <p><strong>Pincode:</strong> {student.contactInfo.address.pincode}</p>
          </div>
        </div>

        <div className="detail-card">
          <h3>Parent Information</h3>
          <div className="detail-content">
            <p><strong>Father's Name:</strong> {student.parentInfo.fatherName}</p>
            <p><strong>Mother's Name:</strong> {student.parentInfo.motherName}</p>
            <p><strong>Parent's Email:</strong> {student.parentInfo.parentEmail}</p>
            <p><strong>Parent's Phone:</strong> {student.parentInfo.parentPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
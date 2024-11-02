// Components/StudentDetails.js
import React from "react";

// Sample student data
const student = {
  id: 1,
  name: "Mahendhar Jillala",
  age: 18,
  class: "B.tech-cse",
  email: "jillalamahendhar@gmail.com",

};



const StudentDetails = () => {
  return (
    <div className="student-details-container">
      <h1>Student Details</h1>
      <table className="student-details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
            <td>{student.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;

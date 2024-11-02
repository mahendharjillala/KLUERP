// Components/AddStudent.js
import React, { useState } from 'react';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    class: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        console.log('Student added successfully');
        setStudent({ name: '', age: '', class: '', email: '' }); // Clear form
      } else {
        console.error('Failed to add student');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
      <input type="text" name="class" placeholder="Class" value={student.class} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;

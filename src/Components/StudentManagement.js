// src/Components/StudentManagement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({ name: '', age: '', class: '', email: '' });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await axios.get('http://localhost:3000/students');
        setStudents(response.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await axios.patch(`http://localhost:3000/students/${editing}`, form);
        } else {
            await axios.post('http://localhost:3000/students', form);
        }
        setForm({ name: '', age: '', class: '', email: '' });
        setEditing(null);
        fetchStudents();
    };

    const handleEdit = (student) => {
        setForm(student);
        setEditing(student._id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/students/${id}`);
        fetchStudents();
    };

    return (
        <div>
            <h1>Student Management</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                <input name="age" value={form.age} onChange={handleChange} placeholder="Age" required />
                <input name="class" value={form.class} onChange={handleChange} placeholder="Class" required />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                <button type="submit">{editing ? 'Update' : 'Add'}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.class}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => handleEdit(student)}>Edit</button>
                                <button onClick={() => handleDelete(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentManagement;

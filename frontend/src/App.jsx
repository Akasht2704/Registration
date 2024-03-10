import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [forms, setForms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/forms')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('Error fetching forms:', error);
            });
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/form', formData)
            .then(response => {
                console.log(response.data);
                setForms([...forms, response.data]);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.log('Error submitting form:', error);
            });
    };

    return (
        <div>
            <h1>Submit Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
                <textarea name="message" value={formData.message} placeholder="Message" onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
            <h2>Submitted Forms</h2>
            <ul>
                {forms.map(form => (
                    <li key={form._id}>
                        <strong>Name:</strong> {form.name}, <strong>Email:</strong> {form.email}, <strong>Message:</strong> {form.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

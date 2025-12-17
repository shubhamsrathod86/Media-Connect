import api from '../api/axios';
import { useState } from 'react';

export default function Register() {
    const [formData, setFormData] = useState({});

    const submit = async (e) => {
        e.preventDefault();
        await api.post('/users/register', formData);
        alert('Registration successful!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={submit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <input placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4" required />
                <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4" required />
                <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4" required />
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
/* 
    File: Register.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Registration form for creating new users via the backend /api/auth/register endpoint. Supports normal User signup only.
    Date: November 23 2025
*/

import { useState } from "react";
import { registerUser } from "../../datasource/api-auth";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        userType: "User"
    });

    const submit = async (e) => {
        e.preventDefault();
        const res = await registerUser(form);

        if (res.message === "User registered successfully") {
            navigate("/login");
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>

            <form onSubmit={submit}>
                <input
                    type="text"
                    value={form.username}
                    placeholder="Username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />

                <input
                    type="email"
                    value={form.email}
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    value={form.password}
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <select
                    value={form.userType}
                    onChange={(e) => setForm({ ...form, userType: e.target.value })}
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
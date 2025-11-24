/* 
    File: Login.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Renders login form UI and handles user authentication using the backend /api/auth/login endpoint.
    Date: November 23 2025
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../datasource/api-auth";

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        const res = await loginUser(form);

        if (res.success) {
            localStorage.setItem("jwt", res.token);
            navigate("/tickets");
        } else {
            setError(res.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>

            <form onSubmit={submit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button type="submit">Login</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;
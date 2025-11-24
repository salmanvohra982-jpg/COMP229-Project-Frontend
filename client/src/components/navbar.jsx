/*
    File: Navbar.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Navigation bar component providing links to main sections of the Help Desk frontend.
    Date: November 23 2025
*/

import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const token = localStorage.getItem('jwt')


    const handleLogout = () => {
        localStorage.removeItem('jwt')
        navigate('/login')
    }


    return (
        <header className="navbar">
            <Link to="/">Help Desk</Link>


            <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
                {!token && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}


                {token && (
                    <>
                        <Link to="/tickets">Tickets</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </header>
    )
}

export default Navbar;
/* 
    File: navbar.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Navigation bar component handling authenticated and non-authenticated link visibility, logout, and main site navigation.
    Date: November 23 2025
*/

import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, getUsername, clearJWT, getRole } from "./auth/auth-helper";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const username = loggedIn ? getUsername() : null;
  const Role = loggedIn ? getRole() : null;

  const handleLogout = () => {
    clearJWT();
    navigate('/users/signin');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">HelpDesk</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tickets">Tickets</Link></li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {!loggedIn && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/users/signin">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users/signup">Register</Link></li>
              </>
            )}
            {loggedIn && (
              <>
                <li className="nav-item"><span className="nav-link">Hello, {username}</span></li>
                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
                <li className="nav-item"><button className="btn btn-sm btn-light" onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
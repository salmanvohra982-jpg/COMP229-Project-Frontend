/* 
    File: Layout.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Legacy navigation component used for original portfolio routes. Partially deprecated by Navbar.jsx but still loaded in MainRouter.
    Date: November 23 2025


import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, getUsername, clearJWT } from './auth/auth-helper';

function Layout() {

    const Location = useLocation();

    const signoutClick = () => {
        clearJWT();
    }

    return (
        <>
            <h1>My Portfolio</h1>
            <nav className="navbar">
                <Link to="/">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link to="/about">
                    <i className="fa-solid fa-address-card"></i> About
                </Link>
                <Link to="/projects">
                    <i className="fas fa-project-diagram"></i> Projects
                </Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/inventory/list">
                    <i className="fa-regular fa-rectangle-list"></i>Inventory List
                </Link>
                {!isAuthenticated() &&
                    <Link to="/users/signin">
                        <i className="fa-solid fa-right-to-bracket"></i> Signin
                    </Link>}
                {isAuthenticated() &&
                    <Link to="/" onClick={signoutClick}>
                        <i className="fa-solid fa-right-from-bracket"></i> Sign-out ({getUsername()})
                    </Link>}
            </nav>
            <br />
            <hr />
        </>
    );
}

export default Layout;*/

/* 
    File: Layout.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Application layout and main navigation. Replaces navbar.jsx.
                 Shows Login when user is not authenticated and Logout when authenticated.
                 Provides links to Tickets, Create Ticket, Profile, and Admin area (Admin only).
    Date: November 23 2025
*/

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, getUsername, getRole, clearJWT } from "./auth/auth-helper";

const Layout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [username, setUsername] = useState(getUsername() || "");
  const [role, setRole] = useState(getRole() || "");
  const location = useLocation();
  const navigate = useNavigate();

  // keep state in sync when auth changes in other parts of app
  useEffect(() => {
    setLoggedIn(isAuthenticated());
    setUsername(getUsername() || "");
    setRole(getRole() || "");
    // listen to storage events (in case login/logout happens in another tab)
    const onStorage = () => {
      setLoggedIn(isAuthenticated());
      setUsername(getUsername() || "");
      setRole(getRole() || "");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [location]);

  const handleLogout = () => {
    clearJWT();
    // notify other tabs
    try { window.dispatchEvent(new Event('storage')); } catch(e){}
    setLoggedIn(false);
    setUsername("");
    setRole("");
    navigate("/users/signin");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">HelpDesk</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              {/* Only show ticket links when logged in */}
              {loggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tickets">Tickets</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tickets/create">Create Ticket</Link>
                  </li>
                  {/* Admin-only link */}
                  {role === "Admin" && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                  )}
                </>
              )}
            </ul>

            <ul className="navbar-nav ms-auto">
              {!loggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/users/signin">Login</Link>
                </li>
              ) : (
                <>
                  <li className="nav-item nav-link text-light">Hi, {username}</li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-light" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: 20 }}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
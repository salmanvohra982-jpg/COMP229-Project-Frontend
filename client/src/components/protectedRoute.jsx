/* 
    File: protectedRoute.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Restricts access to secure routes by checking whether a user is logged in using the JWT token stored in session.
    Date: November 23 2025


import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth/auth-helper";

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/users/signin" replace />;
}

export default ProtectedRoute;*/

/* 
    File: protectedRoute.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Protects routes that require authentication by redirecting unauthenticated users to signin.
    Date: November 23 2025
*/

import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth/auth-helper";

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/users/signin" replace />;
};

export default ProtectedRoute;
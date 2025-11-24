/* 
    File: auth-helper.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Manages JWT token storage, decoding, user session handling, and authentication helper functions for the Help Desk frontend.
    Date: November 23 2025
*/

import { jwtDecode } from "jwt-decode";

const authenticate = (token, cb)=>{
  if (typeof window !== "undefined") {
    sessionStorage.setItem('token', token);

    let decoded = jwtDecode(token);
    sessionStorage.setItem('username', decoded.username || decoded.user?.username || '');
    sessionStorage.setItem('userId', decoded.id || decoded.user?.id || '');
    sessionStorage.setItem('role', decoded.role || decoded.user?.role || decoded.role || '');
  }
  cb();
}

const isAuthenticated = ()=>{
  if (typeof window === "undefined") {
    return false;
  }
  return !!sessionStorage.getItem('token');
}

const getToken = ()=>{
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem('token');
}

const getUsername = ()=>{
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem('username');
}

const getUserId = ()=>{
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem('userId');
}

const getRole = ()=>{
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem('role');
}

const clearJWT = ()=>{
  if (typeof window !== "undefined") {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('role');
  }
}

export { authenticate, isAuthenticated, getToken, getUsername, clearJWT, getUserId, getRole }
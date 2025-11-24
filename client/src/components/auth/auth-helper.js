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
    sessionStorage.setItem('username', decoded.username)
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

const clearJWT = ()=>{
  if (typeof window !== "undefined") {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  }
}

export { authenticate, isAuthenticated, getToken, getUsername, clearJWT }
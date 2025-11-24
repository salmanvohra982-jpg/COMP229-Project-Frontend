/* 
    File: api-auth.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Handles API calls related to authentication (login, register, token management).
    Date: November 23 2025
*/

import axios from 'axios'
const BASE = `${import.meta.env.VITE_APP_APIURL}/api/auth`;


export async function registerUser(payload) {
    try {
        const { data } = await axios.post(`${BASE}/register`, payload)
        return data
    } catch (err) {
        return { success: false, message: err?.response?.data?.message || err.message }
    }
}


export async function loginUser(payload) {
    try {
        const { data } = await axios.post(`${BASE}/login`, payload)
        return data
    } catch (err) {
        return { success: false, message: err?.response?.data?.message || err.message }
    }
}


export async function getProfile() {
    try {
        const token = localStorage.getItem('jwt')
        const { data } = await axios.get(`${BASE}/profile`, { headers: { Authorization: `Bearer ${token}` } })
        return data
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        return null
    }
}
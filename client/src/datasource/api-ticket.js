/* 
    File: api-ticket.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Handles CRUD operations for tickets by communicating with the backend /api/tickets endpoints using Fetch API.
    Date: November 23 2025
*/

import axios from 'axios'
const BASE = `${import.meta.env.VITE_APP_APIURL}/api/tickets`;


function headers() {
    const token = localStorage.getItem('jwt')
    return { Authorization: `Bearer ${token}` }
}


export async function listTickets() {
    const { data } = await axios.get(BASE, { headers: headers() })
    return data
}


export async function getTicket(id) {
    const { data } = await axios.get(`${BASE}/${id}`, { headers: headers() })
    return data
}


export async function createTicket(payload) {
    const { data } = await axios.post(BASE, payload, { headers: headers() })
    return data
}


export async function updateTicket(id, payload) {
    const { data } = await axios.put(`${BASE}/${id}`, payload, { headers: headers() })
    return data
}


export async function cancelTicket(id) {
    const { data } = await axios.delete(`${BASE}/${id}`, { headers: headers() })
    return data
}
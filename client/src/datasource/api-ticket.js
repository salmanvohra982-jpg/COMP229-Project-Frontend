/* 
    File: api-ticket.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Handles CRUD operations for tickets by communicating with the backend /api/tickets endpoints using Fetch API.
    Date: November 23 2025
*/

let apiURL = import.meta.env.VITE_APP_APIURL || ""
import { getToken } from "../components/auth/auth-helper"

const list = async (showClosed = false) => {
    try {
        const url = apiURL + '/api/tickets' + (showClosed ? '?showClosed=true' : '');
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/tickets/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const create = async (ticket) => {
    try {
        let response = await fetch(apiURL + '/api/tickets/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(ticket)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const read = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/tickets/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (ticket, id) => {
    try {
        let response = await fetch(apiURL + '/api/tickets/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ getToken()
            },
            body: JSON.stringify(ticket)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { list, remove, create, read, update }
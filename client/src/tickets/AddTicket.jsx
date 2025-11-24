/* 
    File: AddTicket.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Form component for creating and submitting new tickets.
    Date: November 23 2025
*/

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TicketForm from './TicketForm'
import { createTicket } from '../datasource/api-ticket'

function AddTicket() {
    const navigate = useNavigate()
    const [ticket, setTicket] = useState({ title: '', description: '', priority: 'Low' })
    const [error, setError] = useState(null)


    // attach submit helper
    const changeWrapper = (newState) => {
        Object.assign(changeWrapper, newState)
        setTicket(newState)
    }


    changeWrapper.__submit = async () => {
        try {
            const res = await createTicket(ticket)
            // if createTicket returns the created ticket object, navigate to list
            navigate('/tickets')
        } catch (err) {
            setError('Unable to create ticket')
        }
    }


    return (
        <div className="auth-container">
            <h2>Add Ticket</h2>
            <TicketForm value={ticket} onChange={changeWrapper} submitLabel="Create" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default AddTicket;
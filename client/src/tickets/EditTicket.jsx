/* 
    File: EditTicket.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Form component for editing existing tickets.
    Date: November 23 2025
*/

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TicketForm from './TicketForm'
import { getTicket, updateTicket } from '../datasource/api-ticket'


function EditTicket() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ticket, setTicket] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        (async () => {
            const data = await getTicket(id)
            setTicket(data)
        })()
    }, [id])


    if (!ticket) return <div className="auth-container">Loading...</div>


    const changeWrapper = (newState) => { Object.assign(changeWrapper, newState); setTicket(newState) }



    changeWrapper.__submit = async () => {
        try {
            const res = await updateTicket(id, ticket)
            navigate('/tickets')
        } catch (err) { setError('Unable to update ticket') }
    }


    const closed = ticket.status === 'Closed'


    return (
        <div className="auth-container">
            <h2>Edit Ticket</h2>
            {closed ? (
                <p className="small-muted">Closed tickets cannot be edited.</p>
            ) : (
                <TicketForm value={ticket} onChange={changeWrapper} submitLabel="Update" />
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default EditTicket;
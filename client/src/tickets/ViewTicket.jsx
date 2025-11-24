/* 
    File: ViewTicket.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Detailed view component for displaying ticket information.
    Date: November 23 2025
*/

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTicket } from '../datasource/api-ticket'

function ViewTicket() {
    const { id } = useParams()
    const [ticket, setTicket] = useState(null)


    useEffect(() => {
        (async () => {
            const data = await getTicket(id)
            setTicket(data)
        })()
    }, [id])


    if (!ticket) return <div className="auth-container">Loading...</div>


    return (
        <div className="auth-container">
            <h2>{ticket.title}</h2>
            <p className="small-muted">Ticket #: {ticket.ticketNumber}</p>
            <p>{ticket.description}</p>
            <p className="small-muted">Priority: {ticket.priority} — Status: {ticket.status}</p>


            <div style={{ marginTop: 12 }}>
                <Link to={`/tickets/edit/${ticket._id}`}><button>Edit</button></Link>
                <Link to="/tickets"><button style={{ marginLeft: 8 }}>Back to list</button></Link>
            </div>
        </div>
    )
}

export default ViewTicket;
/* 
    File: ListTicketItem.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Represents a single ticket item within the ticket list view.
    Date: November 23 2025
*/

import { Link } from 'react-router-dom'


function ListTicketItem({ ticket, onDelete }) {
    return (
        <div className="ticket-card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h3>{ticket.title} <span className="small-muted">({ticket.ticketNumber})</span></h3>
                    <p className="small-muted">Priority: {ticket.priority} — Status: {ticket.status}</p>
                </div>


                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Link to={`/tickets/${ticket._id}`}>View</Link>
                    <Link to={`/tickets/edit/${ticket._id}`}>Edit</Link>
                    <button onClick={() => onDelete(ticket._id)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ListTicketItem;
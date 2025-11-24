/* 
    File: ListTickets.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Displays a list of all tickets with filtering and navigation options.
    Date: November 23 2025
*/

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listTickets, cancelTicket } from '../datasource/api-ticket'
import ListTicketItem from './ListTicketItem'

function ListTickets() {
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)


    /* useEffect(() => {
         (async () => {
             try {
                 const data = await listTickets()
                 setTickets(data)
             } catch (err) {
                 console.error(err)
             } finally { setLoading(false) }
         })()
     }, [])*/

    useEffect(() => {
        (async () => {
            try {
                const data = await listTickets();
                // Ensure tickets is always an array
                if (Array.isArray(data)) {
                    setTickets(data);
                } else if (data && Array.isArray(data.tickets)) {
                    setTickets(data.tickets);
                } else {
                    setTickets([]);
                }
            } catch (err) {
                console.error("Failed to fetch tickets:", err);
                setTickets([]);
            } finally {
                setLoading(false);
            }
        })();
    }, []);



    const handleCancel = async (id) => {
        if (!confirm('Cancel this ticket?')) return
        await cancelTicket(id)
        setTickets(prev => prev.filter(t => t._id !== id))
    }


    if (loading) return <div className="auth-container">Loading tickets...</div>


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Tickets</h2>
                <Link to="/tickets/add"><button>Create Ticket</button></Link>
            </div>


            <div className="ticket-list">
                {tickets.length === 0 && <div className="auth-container">No tickets found.</div>}
                {tickets.map(t => (
                    <ListTicketItem key={t._id} ticket={t} onDelete={handleCancel} />
                ))}
            </div>
        </div>
    )
}

export default ListTickets;
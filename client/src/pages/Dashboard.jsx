/* 
    File: Dashboard.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Ticket dashboard showing all open and closed tickets with navigation to view, edit, or cancel tickets.
    Date: November 23 2025
*/

import { useEffect, useState } from "react";
import { list, remove } from "../datasource/api-ticket";
import { Link } from "react-router-dom";
import { getRole } from "../components/auth/auth-helper";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [showClosed, setShowClosed] = useState(false);
  const [error, setError] = useState('');
  const Role = getRole();

  const fetchTickets = async () => {
    const data = await list(showClosed);
    if (Array.isArray(data)) setTickets(data);
    else setError(data?.message || 'Error fetching tickets');
  }

  useEffect(() => {
    fetchTickets();
}, [showClosed]);

  const handleDelete = async (id) => {
    if (!window.confirm("Cancel this ticket? (tickets cannot be deleted but your backend defines cancel via DELETE)")) return;
    const res = await remove(id);
    if (res && res.success) {
      fetchTickets();
    } else {
      alert(res?.message || 'Error cancelling ticket');
    }
  }

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Ticket Dashboard</h2>
        <Link className="btn btn-success" to="/tickets/create">Create Ticket</Link>
      </div>

      <div className="form-check form-switch mb-3">
        <input className="form-check-input" type="checkbox" checked={showClosed} onChange={(e)=>setShowClosed(e.target.checked)} id="showClosed"/>
        <label className="form-check-label" htmlFor="showClosed">Show Closed Tickets</label>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Ticket #</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(t => (
            <tr key={t._id}>
              <td>{t.ticketNumber || t._id}</td>
              <td>{t.title}</td>
              <td>{t.priority}</td>
              <td>{t.status}</td>
              <td>{t.assignedTo || '-'}</td>
              <td>{new Date(t.createdAt).toLocaleString()}</td>
              <td>
                <Link className="btn btn-sm btn-primary me-1" to={`/tickets/${t._id}`}>View</Link>
                {/* Allow editing unless closed */}
                {t.status !== 'Closed' && <Link className="btn btn-sm btn-warning me-1" to={`/tickets/edit/${t._id}`}>Edit</Link>}
                {/* Allow cancel (delete) for all logged in users if backend allows */}
                <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(t._id)}>Cancel</button>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard;
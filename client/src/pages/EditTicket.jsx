/* 
    File: EditTicket.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: UI for modifying an existing ticket’s details (title, description, priority, assigned user) unless the ticket is Closed.
    Date: November 23 2025
*/

import { useState, useEffect } from "react";
import { read, update } from "../datasource/api-ticket";
import { useParams, useNavigate } from "react-router-dom";

const EditTicket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchTicket = async () => {
      const data = await read(id);
      if (data && !data.message) setTicket(data);
      else setError(data?.message || 'Error loading ticket');
    }
    fetchTicket();
  }, [id]);

  if (!ticket) return <div className="container" style={{paddingTop:20}}>Loading...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await update(ticket, id);
    if (res && res.success) {
      navigate(`/tickets/${id}`);
    } else {
      setError(res?.message || 'Error updating ticket');
    }
  }

  if (ticket.status === 'Closed') {
    return <div className="container" style={{paddingTop:20}}>
      <div className="alert alert-warning">Closed tickets cannot be modified.</div>
      <button className="btn btn-secondary" onClick={()=>navigate(-1)}>Back</button>
    </div>
  }

  return (
    <div className="container" style={{ paddingTop:20 }}>
      <h2>Edit Ticket</h2>
      <div className="card p-3">
        <p className="text-danger">{error}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input name="title" value={ticket.title || ''} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea name="description" value={ticket.description || ''} onChange={handleChange} required className="form-control" rows="4" />
          </div>

          <div className="mb-3">
            <label>Priority</label>
            <select name="priority" value={ticket.priority || 'Low'} onChange={handleChange} className="form-select">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Assigned To</label>
            <input name="assignedTo" value={ticket.assignedTo || ''} onChange={handleChange} className="form-control" />
          </div>

          <button className="btn btn-primary" type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default EditTicket;
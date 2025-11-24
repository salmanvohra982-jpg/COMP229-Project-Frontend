/* 
    File: CreateTicket.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Displays the form for creating new Help Desk tickets and sends POST requests to the backend using api-ticket.js.
    Date: November 23 2025
*/

import { useState } from "react";
import TicketModel from "../datasource/ticketModel";
import { create } from "../datasource/api-ticket";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [ticket, setTicket] = useState(new TicketModel());
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await create(ticket);
    if (data && data._id) {
      navigate('/tickets');
    } else {
      setError(data?.message || "Error creating ticket");
    }
  }

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <h2>Create Ticket</h2>
      <div className="card p-3">
        <p className="text-danger">{error}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input name="title" value={ticket.title} onChange={handleChange} required className="form-control" />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea name="description" value={ticket.description} onChange={handleChange} required className="form-control" rows="4" />
          </div>

          <div className="mb-3">
            <label>Priority</label>
            <select name="priority" value={ticket.priority} onChange={handleChange} className="form-select">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Initial Status</label>
            <select name="status" value={ticket.status} onChange={handleChange} className="form-select">
              <option>New</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Assign To (username or userId)</label>
            <input name="assignedTo" value={ticket.assignedTo} onChange={handleChange} className="form-control" />
          </div>

          <button className="btn btn-primary" type="submit">Create Ticket</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTicket;
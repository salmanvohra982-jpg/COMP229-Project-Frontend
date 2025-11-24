/* 
    File: TicketDetails.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Displays full ticket information including comments, status, and allows Admin users to update ticket status or add comments.
    Date: November 23 2025
*/

import { useEffect, useState } from "react";
import { read, update } from "../datasource/api-ticket";
import { useParams, useNavigate } from "react-router-dom";
import { getToken, getRole } from "../components/auth/auth-helper";

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const Role = getRole();

  useEffect(()=> {
    const fetchTicket = async () => {
      const data = await read(id);
      if (data && !data.message) setTicket(data);
      else setError(data?.message || 'Error loading ticket');
    }
    fetchTicket();
  }, [id]);

  if (!ticket) return <div className="container" style={{paddingTop:20}}>Loading...</div>;

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    const updated = { ...ticket, status: newStatus };
    const res = await update(updated, id);
    if (res && res.success) {
      // refetch
      const fresh = await read(id);
      setTicket(fresh);
    } else {
      alert(res?.message || 'Error updating status');
    }
  }

  const handleAddComment = async () => {
    if (!comment.trim()) return;
    // Append comment to existing comments array on frontend
    const newComments = ticket.comments ? [...ticket.comments] : [];
    newComments.push({ text: comment, author: sessionStorage.getItem('username') || 'Unknown' });
    const updated = { ...ticket, comments: newComments };
    const res = await update(updated, id);
    if (res && res.success) {
      const fresh = await read(id);
      setTicket(fresh);
      setComment('');
    } else {
      alert(res?.message || 'Error adding comment');
    }
  }

  return (
    <div className="container" style={{ paddingTop:20 }}>
      <h2>Ticket Details</h2>
      <div className="card p-3">
        <h5>{ticket.title}</h5>
        <p><strong>Ticket #:</strong> {ticket.ticketNumber}</p>
        <p><strong>Description:</strong><br/>{ticket.description}</p>
        <p><strong>Priority:</strong> {ticket.priority}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <p><strong>Assigned To:</strong> {ticket.assignedTo || '-'}</p>

        <hr/>
        <h6>Comments</h6>
        <div>
          {ticket.comments && ticket.comments.length > 0 ? ticket.comments.map((c, idx) =>
            <div key={idx} className="mb-2">
              <div><strong>{c.author || 'Unknown'}</strong> <small className="text-muted">{c.date ? new Date(c.date).toLocaleString() : ''}</small></div>
              <div>{c.text}</div>
            </div>
            ) : <div>No comments</div>}
        </div>

        <hr/>
        <div className="mb-3">
          <label>Add comment</label>
          <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="form-control" rows="2"></textarea>
          <button className="btn btn-primary mt-2" onClick={handleAddComment}>Add Comment</button>
        </div>

        {/* Admin controls: change status */}
        <div>
          <label>Change status (Admin only)</label>
          <select className="form-select" value={ticket.status} onChange={handleStatusChange} disabled={getRole() !== 'Admin'}>
            <option>New</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
      </div>

      <button className="btn btn-secondary mt-3" onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default TicketDetails;
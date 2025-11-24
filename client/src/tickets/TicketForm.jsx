/* 
    File: TicketForm.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Shared form component used by AddTicket and EditTicket for ticket input fields.
    Date: November 23 2025
*/


import React from 'react'

function TicketForm({ value, onChange, submitLabel = 'Save' }) {
    return (
        <form onSubmit={(e) => { e.preventDefault(); onChange.__submit && onChange.__submit() }}>
            <label>Title</label>
            <input value={value.title || ''} onChange={e => onChange({ ...value, title: e.target.value })} />


            <label>Description</label>
            <textarea value={value.description || ''} onChange={e => onChange({ ...value, description: e.target.value })} />


            <label>Priority</label>
            <select value={value.priority || 'Low'} onChange={e => onChange({ ...value, priority: e.target.value })}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>


            <button type="submit">{submitLabel}</button>
        </form>
    )
}

export default TicketForm;
/* 
    File: ticketModel.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Frontend model class defining Ticket field structure used in forms and CRUD operations.
    Date: November 23 2025
*/

class TicketModel {
    constructor(title = "", description = "", priority = "Low", status = "New", assignedTo = "") {
        this.title = title;
        this.description = description;
        this.priority = priority; // Low | Medium | High
        this.status = status;     // New | In Progress | Closed
        this.assignedTo = assignedTo; // user id or username
    }
}

export default TicketModel;
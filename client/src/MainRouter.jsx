/* 
    File: MainRouter.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Defines all React routes for the Help Desk frontend, including public and protected pages, and integrates navigation components.
    Date: November 23 2025
*/

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/PrivateRoute'


import ListTickets from './tickets/ListTickets'
import AddTicket from './tickets/AddTicket'
import EditTicket from './tickets/EditTicket'
import ViewTicket from './tickets/ViewTicket'


import NotFound from './pages/NotFound'

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route path="/tickets" element={<PrivateRoute><ListTickets /></PrivateRoute>} />
            <Route path="/tickets/add" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
            <Route path="/tickets/edit/:id" element={<PrivateRoute><EditTicket /></PrivateRoute>} />
            <Route path="/tickets/:id" element={<PrivateRoute><ViewTicket /></PrivateRoute>} />


            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainRouter;
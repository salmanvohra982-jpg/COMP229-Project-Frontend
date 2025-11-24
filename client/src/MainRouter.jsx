/* 
    File: MainRouter.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Defines all React routes for the Help Desk frontend, including public and protected pages, and integrates navigation components.
    Date: November 23 2025
*/

import { Routes, Route } from "react-router-dom";
/*import Layout from "./components/Layout";*/
import Signin from "./components/auth/Login";
import Signup from "./components/auth/Register";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import EditTicket from "./pages/EditTicket";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedRoute";

function MainRouter() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/signin" element={<Signin />} />
                <Route path="/users/signup" element={<Signup />} />

                {/* Ticket routes - protected */}
                <Route path="/tickets" element={
                    <ProtectedRoute><Dashboard /></ProtectedRoute>
                } />
                <Route path="/tickets/create" element={
                    <ProtectedRoute><CreateTicket /></ProtectedRoute>
                } />
                <Route path="/tickets/:id" element={
                    <ProtectedRoute><TicketDetails /></ProtectedRoute>
                } />
                <Route path="/tickets/edit/:id" element={
                    <ProtectedRoute><EditTicket /></ProtectedRoute>
                } />
                <Route path="/profile" element={
                    <ProtectedRoute><Profile /></ProtectedRoute>
                } />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default MainRouter;
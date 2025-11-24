/* 
    File: PrivateRoute.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Higher-order component that restricts access to protected routes based on authentication state.
    Date: November 23 2025
*/

import { Navigate } from 'react-router-dom'


function PrivateRoute({ children }) {
    const token = localStorage.getItem('jwt')
    return token ? children : <Navigate to="/login" replace />
}

export default PrivateRoute;
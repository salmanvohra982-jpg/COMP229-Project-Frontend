/* 
    File: useAuth.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Custom React hook for managing authentication state and user context.
    Date: November 23 2025
*/


import { useState, useEffect } from 'react'

function useAuth() {
    const [token, setToken] = useState(localStorage.getItem('jwt'))


    useEffect(() => {
        const handler = () => setToken(localStorage.getItem('jwt'))
        window.addEventListener('storage', handler)
        return () => window.removeEventListener('storage', handler)
    }, [])


    const saveToken = (t) => {
        localStorage.setItem('jwt', t)
        setToken(t)
    }


    const logout = () => {
        localStorage.removeItem('jwt')
        setToken(null)
    }


    return { token, saveToken, logout }
}

export default useAuth;
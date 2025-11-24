/* 
    File: Layout.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Legacy navigation component used for original portfolio routes. Partially deprecated by Navbar.jsx but still loaded in MainRouter.
    Date: November 23 2025
*/

import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, getUsername, clearJWT } from './auth/auth-helper';

function Layout() {

    const Location = useLocation();

    const signoutClick = () => {
        clearJWT();
    }

    return (
        <>
            <h1>My Portfolio</h1>
            <nav className="navbar">
                <Link to="/">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link to="/about">
                    <i className="fa-solid fa-address-card"></i> About
                </Link>
                <Link to="/projects">
                    <i className="fas fa-project-diagram"></i> Projects
                </Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/inventory/list">
                    <i className="fa-regular fa-rectangle-list"></i>Inventory List
                </Link>
                {!isAuthenticated() &&
                    <Link to="/users/signin">
                        <i className="fa-solid fa-right-to-bracket"></i> Signin
                    </Link>}
                {isAuthenticated() &&
                    <Link to="/" onClick={signoutClick}>
                        <i className="fa-solid fa-right-from-bracket"></i> Sign-out ({getUsername()})
                    </Link>}
            </nav>
            <br />
            <hr />
        </>
    );
}

export default Layout;
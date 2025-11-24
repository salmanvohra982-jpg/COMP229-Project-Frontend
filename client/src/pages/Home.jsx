


import { Link } from 'react-router-dom'

function Home() {
    const token = localStorage.getItem('jwt')
    return (
        <div style={{ textAlign: 'center', padding: 40 }}>
            <h1>Welcome to Help Desk</h1>
            <p className="small-muted">If You Are New Please Register Before Login</p>


            {!token ? (
                <p>
                    <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to continue.
                </p>
            ) : (
                <p>
                    <Link to="/tickets">Go to Tickets</Link>
                </p>
            )}
        </div>
    )
}

export default Home;
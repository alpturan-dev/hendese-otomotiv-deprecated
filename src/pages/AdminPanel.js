import React, { useEffect } from 'react'
import { logout } from '../firebase'
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
function AdminPanel() {
    const navigate = useNavigate();
    const { email, setEmail, password, setPassword } = useContext(UserContext);
    const handleLogout = async () => {
        await logout();
        setEmail(null);
        setPassword(null);
        return navigate('/login');
    }
    useEffect(() => {
        if (email === null && password === null) {
            return navigate('/login');
        }
    })
    return (
        <div>
            Admin Panel
            <br></br>
            {(email && password) ?
                (<>
                    <div>Hosgeldiniz! {email}</div>
                    <button onClick={handleLogout}>Logout</button>
                </>) :
                (<button onClick={() => navigate('/login')}>Login</button>)
            }
            <br></br>
        </div>
    )
}

export default AdminPanel
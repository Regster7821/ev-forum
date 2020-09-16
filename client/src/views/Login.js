import React, { useState } from 'react';
import LoginSignUp from '../components/LoginSignUp';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default (props) => {
// const [users, setUsers] = useState([]);

//     const createUser = user => {
//         axios.post('http://localhost:8000/api/users/new', user)
//             .then(res=>{
//                 setUsers([...users, res.data]);
//             })
//     }

    return (
        <div className='Container'>
            <Navbar />
            <LoginSignUp/>
        </div>
    )
}
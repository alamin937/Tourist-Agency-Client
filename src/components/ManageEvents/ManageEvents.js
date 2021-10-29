
import React, { useEffect, useState } from 'react';
import ShowManage from '../ShowManage/ShowManage';
import './ManageEvents.css'

const ManageEvents = () => {
    const [users, setUsers] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <div className='manageevents'>
                <div>
                    <h2>Name</h2>
                </div>
                <div>
                    <h2>Email</h2>
                </div>
                <div>
                    <h2>Phone</h2>
                </div>
                <div>
                    <h2>Event Name</h2>
                </div>
               
            </div>
            <hr />
            
        <div>
            {
                users.map(user => <ShowManage user={user}></ShowManage>)
            }
            </div>
        </div>
    );
};

export default ManageEvents;
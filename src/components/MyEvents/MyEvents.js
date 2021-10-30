import React, { useEffect, useState } from 'react';
import UseAuth from '../../UseHooks/UseAuth';
import ShowMyEvent from '../ShowMyEvet/ShowMyEvent';

const MyEvents = () => {
    const {user} = UseAuth();
    const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setEvents(data))
    },[user.email])
    return (
        <div className='p-5'>
            <h1 className='mt-2 m-0'>My Events</h1>
            <h2 className=''>Events Length:{events.length}</h2>
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
           {
               events.map(event =>  <ShowMyEvent event={event}></ShowMyEvent>)
           }
        </div>
    );
};

export default MyEvents;
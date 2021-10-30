
import React, { useEffect, useState } from 'react';
// import ShowManage from '../ShowManage/ShowManage';
import './ManageEvents.css'

const ManageEvents = () => {
    const [users, setUsers] = useState([])
    useEffect(() =>{
        fetch('https://salty-springs-47787.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])



    const handleDelete = id =>{
               const procced = window.confirm('Are You Sure. You Want To Delete?')
               if(procced){
                const url = (`https://salty-springs-47787.herokuapp.com/users/${id}`)
                fetch(url, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount ){
                        alert('Deleted SuccesFully')
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser)
                    }
                })
               }
            }


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
                users.map(user => <div>
                     <div className='manageevents'>
            <div>
                <h4>{user.firstName}</h4>
            </div>
            <div>
                <h4>{user.email}</h4>
            </div>
            <div>
                <h4>{user.phone}</h4>
            </div>
            <div>
                <h4>{user.eventName}</h4>
            </div>
            <div>
            <button onClick={() => handleDelete(user._id)} style={{border:'0', backgroundColor:'red', color:'white', fontWeight:'700'}}>X</button>
            </div>
        </div>
                </div>)
            }
            </div>
        </div>
    );
    
};

export default ManageEvents;
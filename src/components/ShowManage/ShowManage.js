import React from 'react';

const ShowManage = (props) => {
    const {firstName,email,phone,eventName } = props.user
    return (
        <div className='manageevents'>
            <div>
                <h4>{firstName}</h4>
            </div>
            <div>
                <h4>{email}</h4>
            </div>
            <div>
                <h4>{phone}</h4>
            </div>
            <div>
                <h4>{eventName}</h4>
            </div>
            <div>
            <button style={{border:'0', backgroundColor:'red', color:'white', fontWeight:'700'}}>X</button>
            </div>
        </div>
    );
};

export default ShowManage;
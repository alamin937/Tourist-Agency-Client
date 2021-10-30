import React from 'react';

const ShowMyEvent = (props) => {
    const {email, firstName, phone, eventName} = props.event
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
        </div>
    );
};

export default ShowMyEvent;
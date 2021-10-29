import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import UseAuth from '../../../UseHooks/UseAuth';
import ShowTourist from '../ShowTourist/ShowTourist';

const Tourist = () => {
    const [tourists, setTourist] = useState([])
    const {loading} = UseAuth()
    useEffect(() =>{
        fetch('http://localhost:5000/tourist')
        .then(res => res.json())
        .then(data => setTourist(data))
    },[])

    if(loading) return  <Spinner className='mt-3' animation="border" variant="primary" />
    
    return (
        <div style={{width:'90%', margin:'0 auto', marginTop:'30px'}}>
            <h1 className='text-danger'>Tourist Services</h1>
            <hr />
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    tourists.map(tourist =>  <ShowTourist tourist={tourist}></ShowTourist>)
                }

            </Row>
        </div>
    );
};

export default Tourist;
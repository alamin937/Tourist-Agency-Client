import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css";

const ShowTourist = (props) => {
    const {img,name,rate,description} = props.tourist

    useEffect(() =>{
      Aos.init({
        duration: 1000
      })
    },[])




    return (
        <div data-aos="fade-right">
             <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> <h1  data-aos="flip-left" className='text-danger'>{name}</h1> </Card.Title>
          <Card.Text>
            <h3>Cost: ${rate}</h3>
            <p style={{textAlign:'justify'}}>{description.slice(0,200)}</p>
          </Card.Text>
        </Card.Body>
        <NavLink to='/placeorder'><button className='border-0 px-4 py-1 bg-danger mb-2 mt-0 text-white rounded'>Booking</button> </NavLink>
      </Card>
    </Col>
        </div>
    );
};

export default ShowTourist;
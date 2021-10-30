import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Explore = () => {
    return (
        <div style={{width:'90%', margin:'0 auto', marginTop:'50px'}}>
            <h1 className='text-danger' style={{marginBottom:'20px'}}>Explore The World</h1>
            <hr />
            <Row xs={1} md={2} lg={3} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
        <Card.Body>
          <Card.Title>Experienced Guides</Card.Title>
          <Card.Text>
          In Iceland at every step there are hot pools, not to swim in which it is sinful.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=875&q=80" />
        <Card.Body>
          <Card.Title>Choose your Tour</Card.Title>
          <Card.Text>
          Since Iceland is a developed and progressive country, you can do without cash.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
        <Card.Body>
          <Card.Title>Chargers Available</Card.Title>
          <Card.Text>
          On the western fjords there is the most difficult and picturesque road.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default Explore;
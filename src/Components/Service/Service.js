import React from 'react';
import './Service.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = (props) => {
    const { img, title, price } = props;
    return (
        <Card style={{ width: '100%' }} className="service-box">
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body className="box-body">
                <div className="card-body-top">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="box-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </div>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: {price}</ListGroupItem>
                </ListGroup>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
};

export default Service;
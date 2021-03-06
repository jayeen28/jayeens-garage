import React from 'react';
import './Service.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = (props) => {
    //this component is used both in home page top 4 sevices section and also in sevices page
    const { img, title, price, description } = props;
    return (
        // single service card component
        <Card style={{ width: '100%' }} className="service-box">
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body className="box-body">
                <div className="card-body-top">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="box-text">{description}</Card.Text>
                </div>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: {price}$</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Service;
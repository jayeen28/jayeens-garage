import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-contents">
                    <div className="contact-left">
                        <div className="contact-left-head">
                            <h1>Here we are !</h1>
                        </div>
                        <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8854016378855!2d90.39148051462568!3d23.822673791929137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6c2abe72015%3A0x163f4f4303a0d9e9!2sEcb%20Chottor%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1633332020024!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0, height: '300px', width: '500px' }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="contact-right" style={{ width: '50%' }}>
                        <div className="contact-right-head">
                            <h1>Get in touch</h1>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="+1" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="submit-btn">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
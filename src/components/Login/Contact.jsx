import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

const Contact = ({ handleOnBlur }) => {
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                    Email
                </Form.Label>
                <Col sm={9}>
                    <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={3}>
                    Password
                </Form.Label>
                <Col sm={9}>
                    <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </div>
    );
};

export default Contact;
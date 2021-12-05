import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

const Contact = ({ handleOnBlur }) => {
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={12}>
                <b>Email</b>
                </Form.Label>
                <Col sm={12}>
                    <Form.Control onBlur={handleOnBlur} className="inputField" name="email" type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={12}>
                    <b>Password</b>
                </Form.Label>
                <Col sm={12}>
                    <Form.Control onBlur={handleOnBlur} className="inputField" name="password" type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </div>
    );
};

export default Contact;
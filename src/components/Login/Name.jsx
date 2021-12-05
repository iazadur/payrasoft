import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

const Name = ({ handleOnBlur }) => {
    return (
        <div>

            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2}>
                    First Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control onBlur={handleOnBlur} name="FirstName" type="text" placeholder="First Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2}>
                    Last Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control onBlur={handleOnBlur} name="LastName" type="text" placeholder="Last Name" />
                </Col>
            </Form.Group>

        </div>
    );
};

export default Name;
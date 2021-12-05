import React from 'react';
import { Form, Col, Row } from 'react-bootstrap'

const Birthday = ({ handleOnBlur }) => {
    return (
        <div>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2}>
                    Phone Number
                </Form.Label>
                <Col sm={10}>
                    <Form.Control onBlur={handleOnBlur} name="PhoneNumber" type="Number" placeholder="Phone Number" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={2}>
                    Date of Year
                </Form.Label>
                <Col sm={10}>
                    <Form.Control onBlur={handleOnBlur} name="DOY" type="number" placeholder="Date of Year"/>
                </Col>
            </Form.Group>
        </div>
    );
};

export default Birthday;
import React, { useState } from 'react';
import { Form, Button, Card, ListGroup, Row, Col } from 'react-bootstrap'
import swal from 'sweetalert';
import Birthday from './Birthday';
import Contact from './Contact';
import Name from './Name';

const Login = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState({})
    const [user, setUser] = useState([])

    const goNextPage = () => {
        if (page === 3) {
            return
        }
        setPage(page + 1)
    }
    const goPreviewsPage = () => {
        if (page === 1) {
            return
        }
        setPage(page - 1)
    }
    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const neRegisterData = { ...data }
        neRegisterData[field] = value
        setData(neRegisterData)
    }
    const handleRegister = (e) => {
        e.preventDefault();
        if (!data) {
            return
        }
        setUser([...user, data])
        swal({
            title: "Good job!",
            text: "You Registration Successfully!",
            icon: "success",
            button: false,
            timer: 1500
        });
    }
    return (
        <>
            <h1>Register Page</h1>
            <div>
                <progress value={page} max="3"></progress>
            </div>
            <Form onSubmit={handleRegister} className="w-50 m-auto">
                {page === 1 && <Name handleOnBlur={handleOnBlur} />}
                {page === 2 && <Contact handleOnBlur={handleOnBlur} />}
                {page === 3 && <Birthday handleOnBlur={handleOnBlur} />}



                <Row className="mb-3" >
                    <Col sm={3}>

                    </Col>
                    <Col sm={9}>
                        <div className="d-flex justify-content-between">
                            <Button variant="warning" onClick={goPreviewsPage}>Previews</Button>
                            <div className="">
                                {page !== 3 && <Button variant="primary" className="" onClick={goNextPage}>Next</Button>}
                                {page === 3 && <Button variant="success" type="submit">Submit</Button>}
                            </div>
                        </div>
                    </Col>
                </Row>




            </Form>
            <br /><br /><br />

            {user && <div className="">
                <Row xs={1} md={3} className="g-4">
                    {
                        user.map(u =>
                            <Col>
                                <Card>
                                    <Card.Header><b>Your Profile</b></Card.Header>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{u.FirstName}{" "}{u.LastName}</ListGroup.Item>
                                        <ListGroup.Item>{u.PhoneNumber}</ListGroup.Item>
                                        <ListGroup.Item>{u.email}</ListGroup.Item>
                                        <ListGroup.Item>{u.DOY}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>}
        </>
    );
};

export default Login;
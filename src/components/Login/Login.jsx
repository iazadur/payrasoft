import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import swal from 'sweetalert';
import Birthday from './Birthday';
import Contact from './Contact';
import Name from './Name';

const Login = ({ user, setUser }) => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState({})
    const [,] = useState([])

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
            <h1 className="text-center fw-bold text-primary">Create Account</h1>
            <div>
                <progress className="w-100 my-3" value={page} max="3" spellCheck></progress>
            </div>
            <Form onSubmit={handleRegister} className="w-100 m-auto">
                {page === 1 && <Name handleOnBlur={handleOnBlur} />}
                {page === 2 && <Contact handleOnBlur={handleOnBlur} />}
                {page === 3 && <Birthday handleOnBlur={handleOnBlur} />}



                <Row className="mb-3" >

                    <Col>
                        <div>
                            {page > 1 && <Button variant="info" className="float-start px-4 py-2 fw-bold border-0" onClick={goPreviewsPage}>Previews</Button>}
                            <div>
                                {page !== 3 && <Button variant="primary" style={{backgroundColor: '#3598DC'}}  className="float-end px-4 py-2 fw-bold border-0" onClick={goNextPage}>Next</Button>}
                                {page === 3 && <Button variant="success" style={{backgroundColor: '#3598DC'}} className="float-end px-4 py-2 fw-bold border-0"  type="submit">Submit</Button>}
                            </div>
                        </div>
                    </Col>
                </Row>




            </Form>
            <br /><br /><br />


        </>
    );
};

export default Login;
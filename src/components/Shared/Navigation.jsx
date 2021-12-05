import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar className={"shadow-sm p-3"}>
                <Container >
                    <Navbar.Brand href="/" className="fw-bold text-uppercase fs-4">PayraSoft</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Md. Azadur Rahman</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;

import { Col, Row, Card, ListGroup,} from 'react-bootstrap';
import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Shared/Navigation';
import img from './Assert/undraw_In_the_office_re_jtgc.png'
import { useState } from 'react';

function App() {
  const [user,setUser] = useState([])
  return (
    <div className=" container">
      <Navigation />
      <Row xs={1} md={2} className="g-4 h-100 d-flex align-items-center shadow-lg my-5 p-3 rounded-3">
        <Col >
        <img src={img} className="w-100" alt="logo" />
        </Col>
        <Col>
     <Login user={user} setUser={setUser} />
        </Col>
      </Row>

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
    </div>
  );
}

export default App;

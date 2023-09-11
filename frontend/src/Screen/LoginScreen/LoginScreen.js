import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../LoginScreen/LoginScreen.css'
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loding';
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userAction';

function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
   
    const history = useNavigate();
    useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history("/mydata");
        }

    }, [history,userInfo]);
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(login(email,password))
    };
    return (
        <MainScreen title='LOGIN'>
            <div className='loginContainer'>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading/> }
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className='py3'>
                    <Col>
                        New User? <Link variant='dark' to='/register'>Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginScreen

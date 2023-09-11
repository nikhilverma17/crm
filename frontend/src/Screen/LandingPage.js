import React, { useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap'; // Import the Button component
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png'

function LandingPage() {
   const history = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history("/mydata");
        }

    }, [history]);
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div className='intro-text'>
                            {/* <h1 className='title'>Welcome to client management system</h1>*/}
                            <p className='subtitle'>Manage Your Clients Data Here</p> 
                            <center><img src={logo} alt="" /></center>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton' variant='warning'>Login</Button>
                            </a>
                            <a href='/register'>
                                <Button size='lg' className='landingbutton' variant='warning'>Sign Up</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;

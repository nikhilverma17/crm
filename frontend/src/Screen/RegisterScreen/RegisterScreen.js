import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../../components/Loding';
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux'
import { register } from "../../actions/userAction";

function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const history = useNavigate();

    useEffect(() => {
        if (userInfo) {
            history("/mydata");
        }
    }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Password do not match");
        } else {
            dispatch(register(name, email, password, pic));
        }
    };

    const postDetails = (pics) => {
        if (
            !pics
        ) {
            return setPicMessage("please select a image");
        }
        setPicMessage(null);
        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData();
            data.append('file', pics)
            data.append('upload_preset', 'clientmanagement')
            data.append('cloud_preset', 'dnr9az7na')
            fetch("https://api.cloudinary.com/v1_1/dnr9az7na/image/upload", {
                method: "post",
                body: data,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.secure_url);
                    setPic(data.secure_url.toString());
                }).catch((err) => {
                    console.log(err);
                });
        } else {
            return setPicMessage("Please select jpeg or png image only");
        }
    }
    return (
        <MainScreen title="REGISTER">
            <div className="loginContainer">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
                    <Form.Group controlId="pic" className="mb-3">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control
                            type="file"
                           
                            onChange={(e) => postDetails(e.target.files[0])}
                            
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="my-2">
                    <Col>
                        Already a user ?{" "}
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            Login here
                        </Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
}

export default RegisterScreen
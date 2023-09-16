import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userAction';
import { InputGroup, NavLink } from 'react-bootstrap';

function Header({setSearch}) {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const history = useNavigate();
    const logoutHandler = () => {
        dispatch(logout());
        history("/");
    }

    return (
        <>        {userInfo ? <Navbar expand="lg" bg="primary" variant="light">
            
            <Container fluid>
                <Navbar className="bg-inherit justify-content-between ml-auto">
                <Form inline>
                    <InputGroup size="md">
                        <Form.Control
                            placeholder=""
                            aria-label=""
                            aria-describedby="basic-addon1"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1" className='bg-warning'>Search</InputGroup.Text>
                    </InputGroup>
                    </Form>
                </Navbar>
             
             
                <Navbar expand="sm" variant="light" bg="">
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto text-center">
                            <NavLink className="mx-2" href="/mydata"><b>Clients</b></NavLink>
                            <NavLink className="mx-2" href="/profile"><b>{userInfo?.name}</b></NavLink>
                            <NavLink className="mx-2" onClick={logoutHandler}><b>Logout</b></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Navbar> : <Nav>

        </Nav>}
            </>

    );
}

export default Header;

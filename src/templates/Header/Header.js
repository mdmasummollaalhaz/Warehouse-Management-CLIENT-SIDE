import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    // handle sign out
    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt="logo" className='logo me-5' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        {
                            user ?
                                <Nav>
                                    <Nav.Link as={Link} to='/manage-items'>Manage Books</Nav.Link>
                                    <Nav.Link as={Link} to='/add-item'>Add Book</Nav.Link>
                                    <Nav.Link as={Link} to='/my-items'>My Books</Nav.Link>
                                    <Nav.Link onClick={handleSignOut} className=' bg-info text-black px-4 ms-4'>
                                        Log Out
                                    </Nav.Link>
                                </Nav>
                                :

                                <Nav>
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                    <Nav.Link as={Link} to='/signup' className=' bg-info text-black px-4 ms-4'>
                                        Sign up
                                    </Nav.Link>
                                </Nav>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
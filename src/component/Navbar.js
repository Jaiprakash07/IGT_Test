import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCrown } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Navbar() {
    return (
        <>
            <div className='Nav pt-2'>
                <Container fluid="md">
                    <Row className='text-center'>
                        <Col className='pt-2 fw-bolder'><FaCrown /> Landguru</Col>
                        <Col md={6}>
                            <Nav className='justify-content-center'>
                                <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
                                <Nav.Link href="#features" className='text-dark'>Adversite<MdKeyboardArrowDown /></Nav.Link>
                                <Nav.Link href="#pricing" className='text-dark'>Supports<MdKeyboardArrowDown /></Nav.Link>
                                <Nav.Link href="#pricing" className='text-dark'>Contact</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className='pt-2'><Button className='bg-light fw-bolder border-0 text-warning' href="#" size='sm'>Try for free</Button>{''}</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Navbar;
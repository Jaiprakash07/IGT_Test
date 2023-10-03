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
            <Container fluid="md">
                <Row className='text-center'>
                    <Col><FaCrown /> Landguru</Col>
                    <Col md={6}>
                        <Nav className='justify-content-center'>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Adversite<MdKeyboardArrowDown /></Nav.Link>
                            <Nav.Link href="#pricing">Supports<MdKeyboardArrowDown /></Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col><Button href="#" size='sm'>Try for free</Button>{''}</Col>
                </Row>
            </Container>
        </>
    )
}

export default Navbar;
import React from 'react';
import '../style/Herosection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from 'react-icons/ci';
import {BsDropbox } from 'react-icons/bs';
import {BsPaypal } from 'react-icons/bs';

function Herosection() {
    return (
        <div className='Herosec'>
        <Container>
            <Row className='justify-content-center'>
                <Col className='Hero_Left' lg='5'>
                {/* <Col xs={{ order: 12 }}> */}
                    <span className='Hero_tru'>Trused by over 4,332 students</span>
                    <h1 className='Hero_head'>Learn Design with Nia Matos</h1>
                    <p className='Hero_para'>Get your blood test delivered at let home collect sample from the victory of the managments that suppplies best design system guidelines ever.</p>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search Course Name"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            <CiSearch />
                        </Button>
                    </InputGroup>
                    <div className='Hero_blur'>
                        <span className='Her'>Sponsored by: </span>
                        <span><BsPaypal/> Paypal </span>
                        <span> Google.</span>
                        <span> <BsDropbox/> Dropbox</span>
                    </div>
                </Col>
                {/* <Col xs={{ order: 1 }}>Third, but second</Col> */}
                <Col lg='5'>Third, but second</Col>
            </Row>
        </Container>
        </div>
    );
}

export default Herosection;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import car from '../downloads/car.jpg';
import '../style/Slider.css';

function Slider() {
    return (
        <>
            <div>
                <div className="text-center">
                    <p className="Slider_para mt-3 mb-1 text-warning fw-light">QUALITY FEATURES</p>
                    <h2 className="Slider_head">Tutorials that people love most</h2>
                </div>
                <Container>
                    <Row className="justify-content-center" width='70%' height='200px'>
                        <Col>
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="caro-row row justify-content-center">
                                            <div className="col-md-3">
                                                <div className='single-box'>
                                                    <div className="img-area">
                                                        <img src={car} className="d-block w-100" height='200' alt="..." />
                                                    </div>
                                                    <div className="img-text">
                                                        <p className="caro_para">5.0 (392 reviews)</p>
                                                        <h4 className="caro_head">How to works with prototype design</h4>
                                                        <p className="caro_watch">Students watched</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className='single-box'>
                                                    <div className="img-area">
                                                        <img src={car} className="d-block w-100" height='200' alt="..." />
                                                    </div>
                                                    <div className="img-text">
                                                        <p className="caro_para">4.5 (524 reviews)</p>
                                                        <h4 className="caro_head">How to works with prototype design</h4>
                                                        <p className="caro_watch">Students watched</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className='single-box'>
                                                    <div className="img-area">
                                                        <img src={car} className="d-block w-100" height='200' alt="..." />
                                                    </div>
                                                    <div className="img-text">
                                                        <p className="caro_para">5.0 (392 reviews)</p>
                                                        <h4 className="caro_head">How to works with prototype design</h4>
                                                        <p className="caro_watch">Students watched</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className='single-box'>
                                                    <div className="img-area">
                                                        <img src={car} className="d-block w-100" height='200' alt="..." />
                                                    </div>
                                                    <div className="img-text">
                                                        <p className="caro_para">5.0 (392 reviews)</p>
                                                        <h4 className="caro_head">How to works with prototype design</h4>
                                                        <p className="caro_watch">Students watched</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className='single-box'>
                                                    <div className="img-area">
                                                        <img src={car} className="d-block w-100" height='200' alt="..." />
                                                    </div>
                                                    <div className="img-text">
                                                        <p className="caro_para">5.0 (392 reviews)</p>
                                                        <h4 className="caro_head">How to works with prototype design</h4>
                                                        <p className="caro_watch">Students watched</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Slider;
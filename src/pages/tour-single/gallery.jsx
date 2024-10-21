import React from 'react';
import { Modal, Row, Col, Container, Card, ListGroup, Tabs, Tab } from 'react-bootstrap';

import backButton from "./../../../public/assets/img/back-button.svg"
import "./index.scss";


const ImageGridPopup = ({ show, handleCloseModal, images }) => {
    const reviews = [
        {
            id: 1,
            text: "The location is absolutely perfect, 15min walk to the Dubai mall / Burj Khalifa. The staff is very friendly, good facilities and the room has everything that u need.",
            name: "Laurent",
            country: "Netherlands"
        },
        {
            id: 2,
            text: "The wide apartment, the fantastic view and the location in downtown.",
            name: "Atef",
            country: "United Arab Emirates"
        },
        {
            id: 3,
            text: "Good location, well organized, polite staff, clean!",
            name: "Polyxeni",
            country: "Greece"
        },
        {
            id: 4,
            text: "Friendly staff, clean, liked the wash machine/dryer, though it took us awhile to figure out how to use it (had to google the manual). Great service as we were able to store our luggage, still use the...",
            name: "Ryoko",
            country: "United States of America"
        },
        {
            id: 5,
            text: "The location is absolutely perfect, 15min walk to the Dubai mall / Burj Khalifa. The staff is very friendly, good facilities and the room has everything that u need.",
            name: "Laurent",
            country: "Netherlands"
        },
        {
            id: 6,
            text: "The wide apartment, the fantastic view and the location in downtown.",
            name: "Atef",
            country: "United Arab Emirates"
        },
        {
            id: 7,
            text: "Good location, well organized, polite staff, clean!",
            name: "Polyxeni",
            country: "Greece"
        },
        {
            id: 8,
            text: "Friendly staff, clean, liked the wash machine/dryer, though it took us awhile to figure out how to use it (had to google the manual). Great service as we were able to store our luggage, still use the...",
            name: "Ryoko",
            country: "United States of America"
        }
    ];

    return (
        <Modal show={show} onHide={handleCloseModal} className="modal-fullscreen">
            <Modal.Header>
                <div onClick={handleCloseModal} style={{ cursor: 'pointer' }}>
                    <img src={backButton} alt="" style={{
                        maxWidth: '34px'
                    }} />
                </div>
            </Modal.Header>
            <Modal.Body className="pt-3 pb-5">
                <Container fluid className="h-100">
                    <Row className="h-100">
                        <Col xs={8} md={8} lg={8}>
                            <Tabs defaultActiveKey="home" id="horizontal-tabs" className="mb-3" transition={false}>
                                <Tab eventKey="Rooms" title="Rooms"></Tab>
                                <Tab eventKey="Bathrooms" title="Bathrooms"></Tab>
                                <Tab eventKey="Gym" title="Gym"></Tab>
                                <Tab eventKey="Swiming" title="Swiming Pool"></Tab>
                                <Tab eventKey="Garden" title="Garden"></Tab>
                                <Tab eventKey="Club" title="Club"></Tab>
                            </Tabs>
                            <Row className="h-100">
                                {images.map((image, index) => (
                                    <Col key={index} xs={6} md={4} lg={3} className="mb-3">
                                        <img src={image} alt={`img-${index}`} className="img-fluid h-100" />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Card>
                                <Card.Header>Customer Reviews</Card.Header>
                                <ListGroup variant="flush">
                                    {reviews.map(review => (
                                        <ListGroup.Item key={review.id}>
                                            <blockquote className="blockquote mb-0">
                                                <p>{review.text}</p>
                                                <footer className="blockquote-footer">
                                                    <cite title="Source Title">{review.name}, {review.country}</cite>
                                                </footer>
                                            </blockquote>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default ImageGridPopup;

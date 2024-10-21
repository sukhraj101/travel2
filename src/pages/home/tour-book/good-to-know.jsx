import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const GoodToKnow = () => {
    return (
        <Card className="my-4 w-100">
            <Card.Body>
                <Card.Title>Good to know:</Card.Title>
                <div>
                    <Row className="mb-3">
                        <Col>
                            <div className="d-flex align-items-start">
                                <span className="mr-2" role="presentation">
                                    <svg
                                        className="bk-icon -streamline-checkmark_selected"
                                        fill="#008009"
                                        height="16"
                                        width="16"
                                        viewBox="0 0 128 128"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
                                    </svg>
                                </span>
                                <p className="mb-0">Stay flexible: You can cancel for free before October 23, 2024 – lock in this great price today.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="d-flex align-items-start">
                                <span className="mr-2" role="presentation">
                                    <svg
                                        className="bk-icon -streamline-checkmark_selected"
                                        fill="#008009"
                                        height="16"
                                        width="16"
                                        viewBox="0 0 128 128"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
                                    </svg>
                                </span>
                                <p className="mb-0">You'll get the entire studio to yourself!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="d-flex align-items-start">
                                <span className="mr-2" role="presentation">
                                    <svg
                                        className="bk-icon -streamline-taxi_sign"
                                        fill="#008009"
                                        height="16"
                                        width="16"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path d="M21.75 15.5V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-16.5 0V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM3 8.75h3a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zm6.75 6.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 0 1.5 0v-6a2.25 2.25 0 0 0-4.5 0v6a.75.75 0 0 0 1.5 0zM9 13.25h3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm5.304-4.971l3 7.5a.75.75 0 0 0 1.392-.557l-3-7.5a.75.75 0 0 0-1.392.557zm3-.558l-3 7.5a.75.75 0 0 0 1.392.557l3-7.5a.75.75 0 0 0-1.392-.557zM.75 5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 15h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path>
                                    </svg>
                                </span>
                                <p className="mb-0">
                                    Finish this booking to earn a free private airport taxi 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default GoodToKnow;

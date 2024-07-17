import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">404 Error</h1>
                    <p className="text-center">Page not found</p>
                </Col>
            </Row>
        </Container>
    );
}

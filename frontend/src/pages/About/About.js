import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
            <p>Welcome to our website!</p>
            <p>This is a simple book collection website that allows you to add, delete, and update books.</p>

            <h2>Features</h2>
            <ul>
              <li>Add a new book</li>
              <li>Delete a book</li>
              <li>Update a book</li>

            </ul>

            <h2>Technologies</h2>

            <ul>

              <li>React</li>
              <li>Django</li>
              <li>Aws EC2</li>
              <li>AWS S3</li>
              <li>AWS CloudFront</li>
              <li>Bootstrap</li>


            </ul>

            <h2>Source Code</h2>

            <p>The source code of this project is available on <Link to={'https://github.com/huseyinafsin/bookcollection/'}>GitHub</Link>.</p>

            <h2>Author</h2>

            <p>Created by Huseyin Afsin</p>


          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

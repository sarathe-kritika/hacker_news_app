
import React, { Component } from "react";
import {Form, Container, Row, Col, Button } from "react-bootstrap";
class Submit extends Component {
  render() {
     return <Container> 
       <Row>
         <Col xs={6}>
         
  <Form.Group>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group>
    <Form.Label>Url</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group>
    <Form.Label> text</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Button variant="secondary" size="sm">
      Submit
    </Button>
       </Col>
       </Row>
     </Container>
    }
}
export default Submit 
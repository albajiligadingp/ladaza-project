import React from 'react'
import Layout from '../../components/layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '70px'}}>
          <Col md={{span: 6, offset: 3}}>
            <h2>Sign In Here :)</h2>
            <Form style={{marginTop: '30px'}}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default Signin
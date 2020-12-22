import React from 'react'
import Layout from '../../components/layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/ui/input';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '70px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Sign Up Here :)</h2>
            <Form style={{ marginTop: '30px' }}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
              </Row>
              <Input
                label="Email Address"
                placeholder="Email Address"
                value=""
                type="text"
                onChange={() => { }}
              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="text"
                onChange={() => { }}
              />
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default Signup
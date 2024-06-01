"use client"
import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
      <NavBar />
      <Container className='sign'>

        <Row>
          <Col>
            <div className="responsive-container-block bigContainer">
              <div className="responsive-container-block Container bottomContainer">
                <div className="ultimateImg">

                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                      <Form.Label column sm="2">
                        Username
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="text" placeholder="Username" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="email" placeholder="Email" />
                      </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                      <Form.Label column sm="2">
                        Password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                      </Col>
                    </Form.Group>
                  </Form>


                </div>
                <div className="allText bottomText">
                  <p className="text-blk headingText">
                    Sign Up page
                  </p>
                  <img src="/Sign.gif" />
                  <div className='flex justify-around gap-3'>

                    <Link href="/login" className="explore">
                      Login
                    </Link>

                    <Link href="/signup" className="explore">
                      SignUp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default page

"use client"
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import NavBar from '../Navbar';
import { FaStar } from "react-icons/fa";

const page = () => {
    return (
        <>
            <NavBar />
            <Container className='product'>
                <div className='text-center '>
                    <h1 className=' h1  text-danger btn btn-outline-danger  mb-5 p-2'>The Toyes babey</h1>
                </div>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toye.jpeg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toyes/images (1).jpeg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toyes/images (2).jpeg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toyes/images (3).jpeg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toyes/images (4).jpeg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toyes/one.jpg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '400px' }} className='d-flex justify-content-center mb-4'>
                        <Card className='card' >
                            <Card.Img className='card-img' variant="top" src="/toyes/images.jpeg" style={{ width: '100%', height: '200px' }} />
                            <Card.Body>
                                <Card.Title>Bear babey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link className='btn btn-outline-success'>
                                    Add
                                </Card.Link>
                                <Card.Link className='btn btn-outline-danger'>
                                    Remove
                                </Card.Link>

                            </Card.Body>
                            <Card.Header>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text > 123<span className='text-blue-500'>$</span></Card.Text>
                                <Card.Text className='flex text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </Card.Text>
                                <Card.Text>
                                    <code>2022/3/4</code>
                                </Card.Text>
                            </Card.Header>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </>
    )
}

export default page

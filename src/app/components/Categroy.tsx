import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'

const Categroy = () => {
    return (
        <Container className='categroy'>
            <Row className='mt-10 categorey'>
                <Col className='bg-slate-500 '>
                    <div className='flex justify-center'>
                        <h1 className='text-white m-5'>
                            eCommerce  built for success
                        </h1>

                        <p className='m-5 none-item'>
                            Discover    <Link href="" className='text-warning'>eCommerce</Link> website templates built for success
                        </p>

                    </div>
                    <hr className='text-white h-5' />
                    <Navbar>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            </Nav.Item>
                            |
                            <Nav.Item>
                                <Nav.Link className='text-white' href="#features">Features</Nav.Link>
                            </Nav.Item>
                            |
                            <Nav.Item>
                                <Nav.Link className='text-white' href="#pricing">Pricing</Nav.Link>
                            </Nav.Item>
                            |
                            <Nav.Item>
                                <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>



                    </Navbar>
                    <hr className='text-white' />
                    <Col className='flex justify-around image'>
                        <Image
                            className='rounded-xl m-2 hover:shadow-2xl'
                            src="/svg.gif"
                        >

                        </Image>
                        <Image
                            className='rounded-xl m-2 hover:shadow-2xl'
                            src="/svg2.gif"
                        >

                        </Image>
                    </Col>


                </Col>
            </Row>
        </Container>
    )
}

export default Categroy

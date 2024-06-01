import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
const page = () => {
    return (
        <>
            <NavBar />
            <Container className='dowun'>
                <Row>
                    <Col>

                        <div className="">
                            <h2 className='h1 text-black'>Our <span className='text-lime-700'>Services</span></h2>
                            <section className="services">

                                <div className="card">

                                    <div className="content">
                                        <div className="icon"><img src="/Service 24_7.gif" /></div>
                                        <div className="title">24/7 Services</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <div className="icon"><img src="/Credit card.gif" /></div>
                                        <div className="title">Credit Card</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                                    </div>
                                </div>



                                <div className="card">
                                    <div className="content">
                                        <div className="icon"><img src="/Take Away.gif" /></div>
                                        <div className="title"> Delavery 24/7</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                                    </div>
                                </div>


                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default page

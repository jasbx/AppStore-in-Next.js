import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

const page = () => {
    return (
        <>
            <NavBar />
            <Container className='about'>

                <Row>
                    <Col>
                        <div className="responsive-container-block bigContainer">
                            <div className="responsive-container-block Container bottomContainer">
                                <div className="ultimateImg">
                                    <img className="mainImg" src="/about.gif" />
                                    <div className="purpleBox">
                                        <p className="purpleText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
                                        </p>
                                        <img className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg" />
                                    </div>
                                </div>
                                <div className="allText bottomText">
                                    <p className="text-blk headingText">
                                        About Us
                                    </p>
                                    <p className="text-blk subHeadingText">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="text-blk description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
                                    </p>
                                    <Link href={"/"} className="explore">
                                        View Services
                                    </Link>
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

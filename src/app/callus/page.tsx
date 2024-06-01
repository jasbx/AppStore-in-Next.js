import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
    return (
        <>
            <NavBar />

            <Container className='callUs'>
                <h1>Call Us</h1>
                <Row>


                    <Col className='flex justify-around  items-center'>

                        <img src="/Call center.gif" className='call' />

                        <form className="form-style-9">
                            <ul>
                                <li>
                                    <input type="text" name="field1" className="field-style field-split text-black align-left" placeholder="Name" />
                                    <input type="email" name="field2" className="field-style field-split text-black align-right" placeholder="Email" />

                                </li>
                                <li>
                                    <input type="text" name="field3" className="field-style text-black field-split align-left" placeholder="Phone" />
                                    <input type="url" name="field4" className="field-style text-black field-split align-right" placeholder="Website" />
                                </li>
                                <li>
                                    <input type="text" name="field3" className="field-style text-black field-full align-none" placeholder="Subject" />
                                </li>
                                <li>
                                    <textarea name="field5" className="field-style text-black" placeholder="Message"></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="Send Message" />
                                </li>
                            </ul>
                        </form>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default page

"use client"
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaCartArrowDown } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" className='text-3xl' onClick={handleShow}>
        <span className='text-danger total  font-serif'>4</span>
        <FaCartArrowDown className='fs-4 text-dark'>

        </FaCartArrowDown>

      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className='bg-cyan-300'>
          <Offcanvas.Title>Total 12354$</Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#577B8D' }} >
          <Row>
            <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '300px' }} className='d-flex justify-content-center mb-4'>
              <Card className='card' >
                <Card.Img className='card-img' variant="top" src="/labtop.jpeg" style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link className='btn btn-outline-danger'>
                    <CiCircleRemove />
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
                </Card.Header>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '300px' }} className='d-flex justify-content-center mb-4'>
              <Card className='card' >
                <Card.Img className='card-img' variant="top" src="/mopile.avif" style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link className='btn btn-outline-danger'>
                    <CiCircleRemove />
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
                </Card.Header>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '300px' }} className='d-flex justify-content-center mb-4'>
              <Card className='card' >
                <Card.Img className='card-img' variant="top" src="/toye.jpeg" style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link className='btn btn-outline-danger'>
                    <CiCircleRemove />
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
                </Card.Header>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} xl={2} style={{ width: '300px' }} className='d-flex justify-content-center mb-4'>
              <Card className='card' >
                <Card.Img className='card-img' variant="top" src="/shose.webp" style={{ width: '100%', height: '200px' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link className='btn btn-outline-danger'>
                    <CiCircleRemove />
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
                </Card.Header>
              </Card>
            </Col>
          </Row>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;